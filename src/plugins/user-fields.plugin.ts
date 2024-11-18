import { TExtendedUserFieldID, EUserFieldType } from '../common.types'

/**
 * Данные плагина UserFields
 */
export namespace NPluginUserFields {
  /**
   * Данные плагина для пользователя
   */
  export type User = Record<TExtendedUserFieldID, string | null>

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
    type: EUserFieldType

    /**
     * ID св-ва
     *
     * @todo Определить тип св-ва
     */
    uid: string

    /**
     * Значение св-ва
     */
    value: string
  }
}
