import { CustomFieldType } from '../shared'

/**
 * Данные плагина ExtendedFields
 */
export interface PluginExtendedFieldsOfLayerType {
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
