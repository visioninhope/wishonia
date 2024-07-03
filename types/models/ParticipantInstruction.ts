/**
 * Decentralized FDA API
 * A platform for quantifying the effects of every drug, supplement, food, and other factor on your health.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class ParticipantInstruction {
  /**
   * Ex: <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Obtain Fitbit</a> and use it to record your Sleep Duration. Once you have a <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Fitbit</a> account, <a href=\"https://web.quantimo.do/#/app/import\">connect your  Fitbit account at CureDAO</a> to automatically import and analyze your data.
   */
  "instructionsForCauseVariable"?: string
  /**
   * Ex: <a href=\"https://quantimo.do\">Obtain CureDAO</a> and use it to record your Overall Mood. Once you have a <a href=\"https://quantimo.do\">CureDAO</a> account, <a href=\"https://web.quantimo.do/#/app/import\">connect your  CureDAO account at CureDAO</a> to automatically import and analyze your data.
   */
  "instructionsForEffectVariable"?: string

  static readonly discriminator: string | undefined = undefined

  static readonly attributeTypeMap: Array<{
    name: string
    baseName: string
    type: string
    format: string
  }> = [
    {
      name: "instructionsForCauseVariable",
      baseName: "instructionsForCauseVariable",
      type: "string",
      format: "",
    },
    {
      name: "instructionsForEffectVariable",
      baseName: "instructionsForEffectVariable",
      type: "string",
      format: "",
    },
  ]

  static getAttributeTypeMap() {
    return ParticipantInstruction.attributeTypeMap
  }

  public constructor() {}
}
