import { lexFunctionCalls } from './parse_arguments'

export function parseAsyncImports(source: string) {
  return lexFunctionCalls(source, 'AsyncImport')
}

export * from './parse_arguments'
