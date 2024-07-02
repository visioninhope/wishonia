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

import { Chart } from "../models/Chart"

/**
 * An object with various chart properties each property contain and svg and Highcharts configuration
 */
export class StudyCharts {
  "populationTraitScatterPlot"?: Chart
  "outcomeDistributionColumnChart"?: Chart
  "predictorDistributionColumnChart"?: Chart
  "correlationScatterPlot"?: Chart
  "pairsOverTimeLineChart"?: Chart

  static readonly discriminator: string | undefined = undefined

  static readonly attributeTypeMap: Array<{
    name: string
    baseName: string
    type: string
    format: string
  }> = [
    {
      name: "populationTraitScatterPlot",
      baseName: "populationTraitScatterPlot",
      type: "Chart",
      format: "",
    },
    {
      name: "outcomeDistributionColumnChart",
      baseName: "outcomeDistributionColumnChart",
      type: "Chart",
      format: "",
    },
    {
      name: "predictorDistributionColumnChart",
      baseName: "predictorDistributionColumnChart",
      type: "Chart",
      format: "",
    },
    {
      name: "correlationScatterPlot",
      baseName: "correlationScatterPlot",
      type: "Chart",
      format: "",
    },
    {
      name: "pairsOverTimeLineChart",
      baseName: "pairsOverTimeLineChart",
      type: "Chart",
      format: "",
    },
  ]

  static getAttributeTypeMap() {
    return StudyCharts.attributeTypeMap
  }

  public constructor() {}
}
