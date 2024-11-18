import {
  IGetRequestBody,
  IProjectAccess,
  IImageObject,
  ITreeLayer,
  IPolygonView,
} from '../../blocks'
import {
  TLayerID,
  TLayerTypeName,
  TMetablockID,
  TPointID,
  TPointTypeID,
  TPointTypeName,
  TProjectID,
  TWorkspaceID,
} from '../../common.types'
import { NPluginBookings, EPlugin } from '../../plugins'

/**
 * Данные для отображения определенного слоя.
 *
 * Объект содержит данные самого слоя, данные дочерних слоев и данные точек размещенных на слое
 * Если слой не имеет отображения (own_view: false), то запрос вернет ошибку: `error_info.message: "no_visible_layer_found"`
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/get_layer_view}
 */
export interface IGetLayerView extends IGetRequestBody, IProjectAccess {
  /**
   * Данные слоя
   */
  layer_view: {
    /**
     * Объект с данными изображения (подложки) слоя
     */
    image: IImageObject

    /**
     * Данные слоя, который должен быть отображен.
     *
     * Следует учесть что все параметры меток и полигонов относятся к тому слою, на который происходит отображение.
     * Т.е. если слой не имеет своего отображения, но имеет точку с координатами 50:50, то это коорднаты в ОТОБРАЖАЕМОМ слое
     *
     * @todo Сноска из доки в Swagger насчет поля childs: "Сюда действительно попадает дамп ветки дерева. в ближайшее время поправим и это поле уберем вообще".
     * Это св-во содержит тот же объект данных, что содержит ответ запроса project_tree, но следует учитывать, что в дальнейшем,
     * из данного свойства свойство childs будет удалено. Поэтому, его не рекомендуется использовать.
     */
    map_node: ITreeLayer

    /**
     * Данные плагинов
     *
     * @todo неизвестно какие это данные
     */
    plugin_data: unknown[]

    /**
     * Данные точек размещенных на карте
     */
    points: IPoint[]

    /**
     * Данные дочерних слоев (полигонов) размещенных на карте
     */
    polygons: IPolygon[]
  }
}

/**
 * Данные точки для отображения на слое (карте)
 */
export interface IPoint {
  /**
   * ID точки
   */
  id: TPointID

  /**
   * ID метаблока, которому принадлежит точка
   *
   * Техническое поле.
   * @deprecated
   */
  metablock: TMetablockID

  /**
   * Название точки
   */
  name: string

  /**
   * ID слоя, которому принадлежит точка
   *
   * Это необязательно тот слой, на котором отображается точка.
   * Это может быть слой, который является дочерним отображаемому.
   * Обычно таки слои называются полигонами - лой, расположенный на другом слое.
   */
  parent: TLayerID

  /**
   * Данные плагинов данной точки
   */
  plugin_data: Partial<{
    [EPlugin.Bookings]: NPluginBookings.Point
  }>

  /**
   * ID проекта, которому принадлежит точка
   *
   * Техническое поле
   * @deprecated
   */
  project: TProjectID

  /**
   * @todo
   */
  raw_data: unknown | null

  /**
   * Размерный коэффициент
   */
  size_k: number

  /**
   * Название типа точки
   */
  type_name: TPointTypeName

  /**
   * ID типа точки
   */
  type_uid: TPointTypeID

  /**
   * ID воркспейса, которому принадлежит точка
   *
   * Техническое поле
   * @deprecated
   */
  workspace: TWorkspaceID

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
}

/**
 * Данные полигона для отображения на слое (карте)
 */
export interface IPolygon {
  /**
   * @todo
   */
  border_weight: number

  /**
   * ID слоя
   */
  id: TLayerID

  /**
   * Название слоя
   */
  name: string

  /**
   * Полигон (слой) имеет собственное отображение
   */
  own_view: boolean

  /**
   * Данные слоя для его отображения на карте
   */
  polygon: IPolygonView

  /**
   * Название типа слоя
   */
  type_name: TLayerTypeName
}