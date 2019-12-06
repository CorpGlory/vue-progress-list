export enum ValueFormat {
  ABSOLUTE = 'absolute',
  PERCENTAGE = 'percentage'
};

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

export type ThresholdColors = {
  low: string,
  medium: string,
  high: string
}

export type Threshold = {
  values: {
    upperValue: number,
    lowerValue: number
  },
  colors: {
    low: string,
    medium: string,
    high: string
  }
}
