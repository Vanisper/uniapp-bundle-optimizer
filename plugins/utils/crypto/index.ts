import { Buffer } from 'node:buffer'
import { TextEncoder } from 'node:util'
import { xxhashBase16, xxhashBase36, xxhashBase64Url } from './xxhash'

let textEncoder: TextEncoder

// 导出哈希函数
export const getHash64 = (input: string): string => xxhashBase64Url(ensureBuffer(input))
export const getHash36 = (input: string): string => xxhashBase36(ensureBuffer(input))
export const getHash16 = (input: string): string => xxhashBase16(ensureBuffer(input))

export const hasherByType: Record<string, (input: Uint8Array | string) => string> = {
  base36: getHash36,
  base64: getHash64,
  hex: getHash16,
}

export function ensureBuffer(input: string | Uint8Array): Uint8Array {
  if (typeof input === 'string') {
    if (typeof Buffer === 'undefined') {
      textEncoder ??= new TextEncoder()
      return textEncoder.encode(input)
    }

    return Buffer.from(input)
  }
  return input
}

// // 测试代码
// const input = 'const aaa = {\n  name: "aaa"\n};\nexport {\n  aaa as default\n};\n'
// console.log('Base64:', getHash64(input)) // 'y7k522bi1wlPA3twufAYe'
// // console.log('Base36:', getHash36(input))
// // console.log('Base16:', getHash16(input))
