import { ComponentOptionsBase } from '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, E extends EmitsOptions, EE extends string = string> {
    asyncCustomComponents?: Record<string, string>
  }
}
