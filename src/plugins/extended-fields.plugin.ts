import { TCustomFieldIDString, ECustomFieldType } from '../common.types'

/**
 * Данные плагина ExtendedFields
 */
export namespace NPluginExtendedFields {
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

  /**
   * Данные плагина для типа точки
   */
  export interface PointType {
    /**
     * Массив с полями
     */
    fields: ICustomFieldPointType[]
  }

  /**
   * Данные плагина для слоя в результатах поиска
   */
  export interface LayerSearch {
    /**
     * Строковый ID кастомного поля
     */
    id: TCustomFieldIDString

    /**
     * Название кастомного поля
     */
    label: string

    /**
     * Тип кастомного поля
     */
    type: ECustomFieldType

    /**
     * Значение кастомного поля
     *
     * Тип данных значения зависит от типа кастомного поля
     */
    value: string | number | boolean
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
  type_id: ECustomFieldType
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
  type_id: ECustomFieldType

  /**
   * Значение поля
   */
  value: string | number | boolean | unknown[] | Record<string, unknown>
}

/**
 * Данные кастомного поля у типа точки
 */
export interface ICustomFieldPointType {
  /**
   * ID поля
   */
  field_id: number

  /**
   * Строковый ID типа кастомного поля
   */
  type_id: ECustomFieldType

  /**
   * Значение поля
   */
  value: string | number | boolean | unknown[] | Record<string, unknown>
}
