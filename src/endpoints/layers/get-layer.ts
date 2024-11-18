import {
  IGetRequestBody,
  IImageObject,
  IKVSProperty,
  ILayerBasic,
  IPolygonView,
  IProjectAccess,
} from '../blocks'
import { TLayerID } from '../common.types'
import { NPluginBookings, NPluginExtendedFields, EPlugin } from '../plugins'

/**
 * Получить данные слоя
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/get_layer}
 */
export interface IGetLayer extends IGetRequestBody, IProjectAccess {
  /**
   * Информация о слое
   */
  layer_info: ILayer
}

/**
 * Данные слоя
 */
export interface ILayer extends ILayerBasic {
  /**
   * Техническое поле
   * @deprecated
   */
  class_version: string

  /**
   * ID ближайшего вышележащего слоя с own_view = true (тоесть имеющего собственную подложку)
   */
  closest_map_layer: TLayerID | null

  /**
   * Объект с данными изображения (подложки) слоя
   */
  default_image: IImageObject

  /**
   * Описание слоя
   */
  info: string | null

  /**
   * ID родительского слоя
   */
  parent: TLayerID | null

  /**
   * Объект с данными изображения (подложки) родительского слоя
   */
  parent_image: IImageObject | null

  /**
   * Массив с названиями родительских слоев от ближайшего до корневого
   */
  parent_name: string[]

  /**
   * Данные слоя для его отображения на карте
   */
  polygon: IPolygonView

  /**
   * KVS-хранилище объекта
   *
   * @todo непонятно для чего используется
   */
  properties: IKVSProperty[]

  /**
   * Данные плагинов
   */
  plugin_data: Partial<
    Record<EPlugin, Record<string, any>> & {
      [EPlugin.Bookings]: NPluginBookings.Layer
      [EPlugin.ExtendedFields]: NPluginExtendedFields.Layer
    }
  >
}
