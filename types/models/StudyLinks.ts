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

export class StudyLinks {
  /**
   * Share this link with potential study participants
   */
  "studyJoinLink"?: string
  /**
   * Ex: mailto:?subject=N1%20Study%3A%20Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood&body=Check%20out%20my%20study%20at%20https%3A%2F%2Flocal.quantimo.do%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%0A%0AHave%20a%20great%20day!
   */
  "studyLinkEmail": string
  /**
   * Ex: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocal.quantimo.do%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
   */
  "studyLinkFacebook": string
  /**
   * Ex: https://plus.google.com/share?url=https%3A%2F%2Flocal.quantimo.do%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
   */
  "studyLinkGoogle": string
  /**
   * Ex: https://local.quantimo.do/api/v2/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
   */
  "studyLinkStatic": string
  /**
   * Ex: https://local.quantimo.do/ionic/Modo/www/index.html#/app/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
   */
  "studyLinkDynamic": string
  /**
   * Ex: https://twitter.com/home?status=Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood%20https%3A%2F%2Flocal.quantimo.do%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%20%40curedao
   */
  "studyLinkTwitter": string

  static readonly discriminator: string | undefined = undefined

  static readonly attributeTypeMap: Array<{
    name: string
    baseName: string
    type: string
    format: string
  }> = [
    {
      name: "studyJoinLink",
      baseName: "studyJoinLink",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkEmail",
      baseName: "studyLinkEmail",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkFacebook",
      baseName: "studyLinkFacebook",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkGoogle",
      baseName: "studyLinkGoogle",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkStatic",
      baseName: "studyLinkStatic",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkDynamic",
      baseName: "studyLinkDynamic",
      type: "string",
      format: "",
    },
    {
      name: "studyLinkTwitter",
      baseName: "studyLinkTwitter",
      type: "string",
      format: "",
    },
  ]

  static getAttributeTypeMap() {
    return StudyLinks.attributeTypeMap
  }

  public constructor() {}
}
