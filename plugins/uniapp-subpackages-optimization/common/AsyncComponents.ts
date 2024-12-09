/* eslint-disable unused-imports/no-unused-vars */
export type BindingAsyncComponents = Record<string, {
  tag: string
  value: string
  type: 'asyncComponent'
}>

export interface TemplateDescriptor {
  bindingAsyncComponents: BindingAsyncComponents | null
}

export class AsyncComponents {
  scriptDescriptors: Map<string, TemplateDescriptor> = new Map()
  jsonAsyncComponentsCache: Map<string, BindingAsyncComponents> = new Map()

  constructor() {}

  rename = (name: string) => name.startsWith('wx-') ? name.replace('wx-', 'weixin-') : name

  addScriptDescriptor(filename: string, binding: BindingAsyncComponents) {
    binding && filename && this.scriptDescriptors.set(filename, {
      bindingAsyncComponents: binding,
    })
  }

  addAsyncComponents(filename: string, json: BindingAsyncComponents) {
    this.jsonAsyncComponentsCache.set(filename, json)
  }

  generateBinding(tag: string, path: string) {
    return { tag, value: path, type: 'asyncComponent' } as const
  }

  getComponentPlaceholder(filename: string) {
    const cache = this.jsonAsyncComponentsCache.get(filename)
    if (!cache)
      return null

    const componentPlaceholder = Object.entries(cache).reduce<Record<string, string>>((p, [key, value]) => {
      p[this.rename(key)] = 'view'
      return p
    }, {})
    return componentPlaceholder
  }

  generateComponentPlaceholderJson(filename: string, originJson: Record<string, string> = {}) {
    const componentPlaceholder = this.getComponentPlaceholder(filename)
    return Object.assign(originJson || {}, componentPlaceholder || {})
  }
}
