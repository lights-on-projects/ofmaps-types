import { TLayerID, TPointID, TPointTypeID } from '../../common.types'
import { NPluginBookings, NPluginExtendedFields, EPlugin } from '../../plugins'
import { IKVSProperty } from '../kvs-property'

/**
 * Данные точки
 */
export interface IPointInfo {
  /**
   * Техническое поле
   * @deprecated
   */
  class_version: string

  /**
   * ID точки
   */
  id: TPointID

  /**
   * Описание точки
   */
  info: string | null

  /**
   * Название точки
   */
  name: string

  /**
   * ID родительского слоя
   */
  parent: TLayerID

  /**
   * Массив с названиями родительских слоев
   *
   * От ближайшего до дальнего
   */
  parent_name: string[]

  /**
   * KVS-хранилище объекта
   *
   * @todo непонятно для чего используется
   */
  properties: IKVSProperty[]

  /**
   * Размерный коэффициент
   */
  size_k: number

  /**
   * Порядок сортировки
   *
   * Каждый слой имеет уникальный индекс, по величине которого определяется порядок сортировки
   */
  sort: number

  /**
   * ID типа точки
   */
  type_uid: TPointTypeID

  /**
   * Координата по оси x данной точки в xPcu относительно отображаемого слоя.
   *
   * Координата указана относительно родительского слоя, у которого own_view равно true
   */
  x: number

  /**
   * Координата по оси y данной точки в yPcu относительно отображаемого слоя.
   *
   * Координата указана относительно родительского слоя, у которого own_view равно true
   */
  y: number

  /**
   * Данные плагинов
   */
  plugin_data: Partial<{
    [EPlugin.Bookings]: NPluginBookings.PointType
    [EPlugin.ExtendedFields]: NPluginExtendedFields.PointType
  }>
}
