export enum ValueFormat {
  ABSOLUTE = 'absolute',
  PERCENTAGE = 'percentage'
};

export type Item = {
  title: string,
  value: number,
  backgroundColor: string
}

export type StopValues = {
  upperValue: number,
  lowerValue: number
}

export type StopColors = {
  low: string,
  medium: string,
  high: string
}

export type Stops = {
  values: StopValues,
  colors: StopColors
}
