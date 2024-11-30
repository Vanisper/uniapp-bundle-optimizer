/** 解析函数的参数，考虑字符串、数字、变量等类型，并返回定位信息 */
export interface ArgumentLocation {
  value: string | number
  start: number
  end: number
}

export interface FullMatchLocation {
  start: number
  end: number
  fullMatch: string
}

export interface FunctionCall {
  full: FullMatchLocation
  args: ArgumentLocation[]
}
