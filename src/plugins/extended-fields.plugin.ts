import { CustomFieldType } from '../common.types'

/**
 * Данные плагина ExtendedFields
 */
export namespace IPluginExtendedFields {
  /**
   * Данные плагина для типа слоя
   */
  export interface LayerType {
    fields: {
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
       * ID кастомного поля
       */
      type_id: CustomFieldType
    }[]
  }
}
