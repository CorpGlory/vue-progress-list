export type Item = {
  title: string,
  value: number,
  backgroundColor: string
}

export type Config = {
  maxValue: number,
  opacity: number
}

export type Thresholds = {
  upperValue: number,
  lowerValue: number
}

export type ThresholdConfig = {
  lowerColor: string,
  middleColor: string,
  upperColor: string
}
