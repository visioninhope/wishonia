import { HumanMessage, SystemMessage } from "@langchain/core/messages"
import { StringOutputParser } from "@langchain/core/output_parsers"
import OpenAI from "openai"

import { convertToLocalDateTime } from "@/lib/dateTimeWithTimezone"
import { getChatOpenAIModel } from "@/lib/openai"

// Create an OpenAI API client (that's edge-friendly!)
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
})
let model = process.env.OPENAI_MODEL || "gpt-4o"

export async function textCompletion(
  promptText: string,
  returnType: "text" | "json_object"
): Promise<string> {
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: model,
    stream: false,
    //max_tokens: 150,
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant`,
      },
      {
        role: "user", // user = the dFDA app
        content: promptText,
      },
    ],
    response_format: { type: returnType },
  })

  if (!response.choices[0].message.content) {
    throw new Error("No content in response")
  }

  const str = response.choices[0].message.content
  return replaceStupidWords(str)
}

export async function jsonArrayCompletion(promptText: string): Promise<any[]> {
  const response = await textCompletion(
    `Return a json array containing ${promptText}`,
    "json_object"
  )
  const arr = JSON.parse(response)
  if (!Array.isArray(arr)) {
    for (const key in arr) {
      if (Object.prototype.hasOwnProperty.call(arr, key)) {
        const element = arr[key]
        if (Array.isArray(element)) {
          return element
        }
      }
    }
  }
  return arr
}

export function formatTextResponse(text: string): string {
  // Remove quote marks
  text = text.replace(/"/g, "")
  text = replaceStupidWords(text)
  return text
}

function replaceStupidWords(text: string): string {
  text = text.replace("delves into", "explores")
  return text
}

export async function askYesOrNoQuestion(question: string): Promise<boolean> {
  const model = getChatOpenAIModel("gpt-3.5-turbo-0125")
  const messages = [
    new SystemMessage(
      `Accurately answer the following question with a 'YES' or 'NO'.`
    ),
    new HumanMessage(question),
  ]

  const result = await model.invoke(messages)
  const parser = new StringOutputParser()
  let answer = await parser.invoke(result)
  answer = answer.replace(/['"]+/g, "")
  answer = answer.trim().toUpperCase()
  if (answer === "YES" || answer === "NO") {
    return answer === "YES"
  }
  throw new Error(`Invalid response: ${result} from question: ${question}`)
}

export async function getDateTimeFromStatementInUserTimezone(
  statement: string,
  utcDateTime: string,
  timeZoneOffset: number
): Promise<string> {
  const localDateTime = convertToLocalDateTime(utcDateTime, timeZoneOffset)
  const promptText = `
        estimate the date and time of the user statement based on the user's current date and time ${localDateTime}
         and the following user statement:
\`\`\`
${statement}
\`\`\`
       Return a single string in the format "YYYY-MM-DDThh:mm:ss"`
  let result = await textCompletion(promptText, "text")
  // Remove quote marks
  result = result.replace(/['"]+/g, "")
  return result
}
