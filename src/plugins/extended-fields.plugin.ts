import { CustomFieldType } from '../common.types'

/**
 * Данные плагина ExtendedFields
 */
export namespace IPluginExtendedFields {
  /**
   * Данные плагина для типа слоя
   */
  export interface LayerType {
    /**
     * Массив с полями
     */
    fields: ICustomFieldLayerType[]
  }

  /**
   * Данные плагина для слоя
   */
  export interface Layer {
    /**
     * Массив с полями
     */
    fields: ICustomFieldLayer[]
  }
}

/**
 * Данные кастомного поля у типа слоя
 */
export interface ICustomFieldLayerType {
  /**
   * @todo
   */
  block: string

  /**
   * Дополнительная информация (зависит от поля)
   */
  extension: string | null

  /**
   * Id поля
   */
  id: number

  /**
   * Поле должно быть в выдаче листера при определенных запросах. Может пригодиться для отчётов
   */
  lister: boolean

  /**
   * Название поля
   */
  name: string

  /**
   * Поле обязательно для заполнения
   */
  obligate: boolean

  /**
   * Порядок сортровки (по отношению к другим полям)
   * @todo Описать принцип работы
   */
  sort: number

  /**
   * Строковый ID типа кастомного поля
   */
  type_id: CustomFieldType
}

/**
 * Данные кастомного поля у слоя
 */
export interface ICustomFieldLayer {
  /**
   * ID поля
   */
  field_id: number

  /**
   * Строковый ID типа кастомного поля
   */
  type_id: CustomFieldType

  /**
   * Значение поля
   */
  value: string
}