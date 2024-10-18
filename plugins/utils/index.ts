export function replaceStringAtPosition(originalStr: string, start: number, end: number, replaceWith: string) {
  return originalStr.substring(0, start) + replaceWith + originalStr.substring(end)
}

export function normalizePath(id: string) {
  return exports.isWindows ? id.replace(/\\/g, '/') : id
}
