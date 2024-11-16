import { ExtendedUserFieldID } from '../common.types'

/**
 * Данные плагина UserFields
 */
export namespace IPluginUserFields {
  /**
   * Данные плагина для пользователя
   */
  export type User = Record<ExtendedUserFieldID, string | null>
}
