import 'i18next'
import type { resources } from './resources.ts'

// Type-checks translation keys against the French files.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['fr']
  }
}
