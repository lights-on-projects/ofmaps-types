import { IGetRequestBody, IKVSProperty, IProjectAccess } from '../blocks'
import { LayerID, PointID, PointTypeID } from '../common.types'
import { IPluginBookings, IPluginExtendedFields, Plugins } from '../plugins'

/**
 * Ответа запроса для получени данные точки
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/get_node}
 */
export interface IGetNode extends IGetRequestBody, IProjectAccess {
  /**
   * Данные точки
   */
  node_info: INodeInfo
}

/**
 * Данные точки
 */
export interface INodeInfo {
  /**
   * Техническое поле
   * @deprecated
   */
  class_version: string

  /**
   * ID точки
   */
  id: PointID

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
  parent: LayerID

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
  type_uid: PointTypeID

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
   *
   */
  plugin_data: Partial<{
    [Plugins.Bookings]: IPluginBookings.PointType
    [Plugins.ExtendedFields]: IPluginExtendedFields.PointType
  }>
}
