import { ExtendedUserFieldID, UserFieldType } from '../common.types'

/**
 * Данные плагина UserFields
 */
export namespace IPluginUserFields {
  /**
   * Данные плагина для пользователя
   */
  export type User = Record<ExtendedUserFieldID, string | null>

  /**
   * Данные плагина для пользователя в результате поиска
   */
  export interface UserSearch {
    /**
     * Название св-ва
     */
    label: string

    /**
     * Тип св-ва
     */
    type: UserFieldType

    /**
     * ID св-ва
     */
    uid: string

    /**
     * Значение св-ва
     */
    value: string
  }
}
