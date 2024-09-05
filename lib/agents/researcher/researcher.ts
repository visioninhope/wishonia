import { z } from 'zod';
import { generateObject } from 'ai';
import { getSearchResults } from "@/lib/agents/researcher/getSearchResults";
import { generateSearchQueries } from "@/lib/agents/researcher/searchQueryGenerator";
import {anthropic} from "@ai-sdk/anthropic";
import {openai} from "@ai-sdk/openai";
import {google} from "@ai-sdk/google";
import {LanguageModelV1} from "@ai-sdk/provider";
import {SearchResult} from "exa-js";
const GeneratedReportSchema = z.object({
  title: z.string().describe('The title of the report'),
  description: z.string().describe('A brief description or summary of the report'),
  content: z.string().describe('The main content of the report in markdown format. DO NOT include the title.'),
  sources: z.array(z.object({
    url: z.string(),
    title: z.string(),
    description: z.string(),
  })).describe('An array of sources used in the report'),
  tags: z.array(z.string()).describe('Relevant tags for the report'),
  category: z.string().describe('The main category of the report'),
  readingTime: z.number().describe('Estimated reading time in minutes'),
});

type GeneratedReport = z.infer<typeof GeneratedReportSchema>;

export type ReportOutput = GeneratedReport & {
  searchResults: SearchResult[];
  featuredImage?: string;
};

function getModel(modelName: string): LanguageModelV1 {
  if (modelName.includes("claude")) {
    return anthropic(modelName);
  }
  if (modelName.includes("gpt")) {
    return openai(modelName);
  }
  if (modelName.includes("gemini")) {
    return google('models/' + modelName, {
      topK: 0,
      safetySettings: [
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' }
      ]
    });
  }
  return anthropic('claude-3-5-sonnet-20240620'); // Default model
}

export async function writeArticle(
  topic: string,
  options: {
    numberOfSearchQueryVariations?: number,
    numberOfWebResultsToInclude?: number,
    audience?: string,
    purpose?: string,
    maxCharactersOfSearchContentToUse?: number,
    tone?: string,
    format?: 'article' | 'bullet-points' | 'Q&A',
    wordLimit?: number,
    includeSummary?: boolean,
    languageLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert',
    citationStyle?: 'footnote' | 'hyperlinked-text' | 'endnotes',
    modelName?: 'claude-3-5-sonnet-20240620' | 'claude-3-opus-20240229' | 'claude-3-sonnet-20240229' | 'claude-3-haiku-20240307' |
        'gpt-4o' | 'gpt-4o-2024-05-13' | 'gpt-4o-2024-08-06' | 'gpt-4o-mini' | 'gpt-4o-mini-2024-07-18' | 'gpt-4-turbo' | 'gpt-4-turbo-2024-04-09' | 'gpt-4-turbo-preview' | 'gpt-4-0125-preview' | 'gpt-4-1106-preview' | 'gpt-4' | 'gpt-4-0613' | 'gpt-3.5-turbo-0125' | 'gpt-3.5-turbo' | 'gpt-3.5-turbo-1106' |
        'gemini-1.5-flash-latest' | 'gemini-1.5-flash' | 'gemini-1.5-pro-latest' | 'gemini-1.5-pro' | 'gemini-1.0-pro'
        // doesn't work 'gemini-pro' ,
  } = {}
): Promise<ReportOutput> {
  const {
    numberOfSearchQueryVariations = 1,
    numberOfWebResultsToInclude = 10,
    audience = 'general',
    purpose = 'inform',
    maxCharactersOfSearchContentToUse = 999999,
    tone = 'neutral',
    format = 'article',
    wordLimit,
    includeSummary = false,
    languageLevel = 'intermediate',
    citationStyle = 'hyperlinked-text',
    modelName = 'claude-3-5-sonnet-20240620',
  } = options;

  console.log(`Starting research on topic: "${topic}"`);

  const searchQueries = await generateSearchQueries(topic, numberOfSearchQueryVariations);
  console.log("Generated search queries:", searchQueries);

  const searchResults = await getSearchResults(searchQueries, numberOfWebResultsToInclude);
  console.log(`Found ${searchResults.length} search results.`);

  console.log("Synthesizing report...");

  const model: LanguageModelV1 = getModel(modelName);

  const inputData = searchResults.map(
    (item) => `--START ITEM: ${item.title}--\n
    TITLE: ${item.title}\n
    URL: ${item.url}\n
    CONTENT: ${item.text.slice(0, maxCharactersOfSearchContentToUse)}\n
    --END ITEM: ${item.title}--\n`
  ).join("");

  let citationInstructions = '';
  if (citationStyle === 'footnote') {
    citationInstructions = 'Provide citations in the text using markdown footnote notation like [^1].';
  } else if (citationStyle === 'hyperlinked-text') {
    citationInstructions = 'Hyperlink the relevant text in the report to the source URLs used using markdown hyperlink notation like [text](https://link-where-you-got-the-information).';
  }

  const prompt = `
    Write an extremely information-dense and comprehensive ${format} on the topic of "${topic}" based on the Web Search Results below.
    
    # Guidelines
    
    Avoid fluff and filler content. Focus on providing the most relevant and useful information.
    DO NOT include the title in the content.
    
    Audience: ${audience}
    Purpose: ${purpose}
    Tone: ${tone}
    Language Level: ${languageLevel}
    Citation Style: ${citationInstructions}
    ${wordLimit ? `Word Limit: ${wordLimit} words` : ''}
    ${includeSummary ? 'Include a brief summary at the beginning.' : ''}

# Web Search Results
    Here is a list of web pages and excerpts from them that you can use to write the report:
    ${inputData}
  `;

  const result = await generateObject({
    model: model,
    schema: GeneratedReportSchema,
    prompt,
  });

  debugger;
  console.log("Article generated successfully!", result.object);

  return {
    ...(result.object as unknown as GeneratedReport),
    searchResults: searchResults,
  };
}