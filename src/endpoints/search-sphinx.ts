import { IGetRequestBody, IProjectAccess } from '../blocks'
import {
  IndexType,
  LayerID,
  LayerTypeID,
  PointID,
  PointTypeID,
  UserID,
  UserRole,
} from '../common.types'
import {
  IPluginBookings,
  IPluginExtendedFields,
  IPluginUserFields,
  Plugins,
} from '../plugins'

/**
 * Данные запроса для поиска
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/project_search_v2}
 */
export interface ISearchSphinx extends IGetRequestBody, IProjectAccess {
  /**
   * Результат поиска
   */
  search_result: (
    | ISearchSphinxUser
    | ISearchSphinxPoint
    | ISearchSphinxLayer
    | ISearchSphinxBooking
  )[]
}

/**
 * Пользователь, полученный в результате поиска
 */
export interface ISearchSphinxUser {
  /**
   * ID пользователя
   */
  id: UserID

  /**
   * Имя пользователя
   */
  display: string

  /**
   * Тип найденной записи
   */
  'index-type': IndexType.User

  /**
   * Логин пользователя
   */
  login: string

  /**
   * Роль пользователя
   */
  role: UserRole

  /**
   * Данные плагина Bookings
   */
  [Plugins.Bookings]: IPluginBookings.UserSearch

  /**
   * Данные плагина UserFields
   */
  [Plugins.UserFields]: IPluginUserFields.UserSearch[]
}

/**
 * Точка, полученная в результате поиска
 */
export interface ISearchSphinxPoint {
  /**
   * ID точки
   */
  id: PointID

  /**
   * Тип найденной записи
   */
  'index-type': IndexType.Point

  /**
   * Название точки
   */
  name: string

  /**
   * ID родительского слоя
   */
  parent: LayerID

  /**
   * Путь до точки.
   *
   * От дальнего родителя, до ближайшего. Последний элемент массива,
   * это название точки
   */
  path: string[]

  /**
   * Элементы path, объединенные в строку с помощью точки
   */
  pathjd: string

  /**
   * Название типа точки
   */
  type_name: string

  /**
   * ID типа точки
   */
  type_uid: PointTypeID

  /**
   * Данные плагина Bookings
   */
  [Plugins.Bookings]: IPluginBookings.PointSearch
}

/**
 * Точка, полученная в результате поиска
 */
export interface ISearchSphinxLayer {
  /**
   * ID слоя
   */
  id: LayerID

  /**
   * Тип найденной записи
   */
  'index-type': IndexType.Layer

  /**
   * Название слоя
   */
  name: string

  /**
   * ID родительсого слоя
   */
  parent: LayerID | null

  /**
   * Путь до точки.
   *
   * От дальнего родителя, до ближайшего
   */
  path: string[]

  /**
   * Элементы path, объединенные в строку с помощью точки
   */
  pathjd: string

  /**
   * Название типа слоя
   */
  type_name: string

  /**
   * ID типа слоя
   */
  type_uid: LayerTypeID

  /**
   * Данные плагина ExtendedFields
   */
  [Plugins.ExtendedFields]: IPluginExtendedFields.LayerSearch[]
}

/**
 * Бронирование, полученное в результате поиска
 *
 * @todo Неизвестно какой объект содержит
 */
export interface ISearchSphinxBooking {
  /**
   * Тип найденной записи
   */
  'index-type': IndexType.Booking
}
