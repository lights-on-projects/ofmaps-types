import { IGetRequestBody, IProjectAccess } from '../blocks'
import {
  EIndexType,
  TLayerID,
  TLayerTypeID,
  TPointID,
  TPointTypeID,
  TUserID,
  EUserRole,
} from '../common.types'
import {
  NPluginBookings,
  NPluginExtendedFields,
  NPluginUserFields,
  EPlugin,
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
  id: TUserID

  /**
   * Имя пользователя
   */
  display: string

  /**
   * Тип найденной записи
   */
  'index-type': EIndexType.User

  /**
   * Логин пользователя
   */
  login: string

  /**
   * Роль пользователя
   */
  role: EUserRole

  /**
   * Данные плагина Bookings
   */
  [EPlugin.Bookings]: NPluginBookings.UserSearch

  /**
   * Данные плагина UserFields
   */
  [EPlugin.UserFields]: NPluginUserFields.UserSearch[]
}

/**
 * Точка, полученная в результате поиска
 */
export interface ISearchSphinxPoint {
  /**
   * ID точки
   */
  id: TPointID

  /**
   * Тип найденной записи
   */
  'index-type': EIndexType.Point

  /**
   * Название точки
   */
  name: string

  /**
   * ID родительского слоя
   */
  parent: TLayerID

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
  type_uid: TPointTypeID

  /**
   * Данные плагина Bookings
   */
  [EPlugin.Bookings]: NPluginBookings.PointSearch
}

/**
 * Точка, полученная в результате поиска
 */
export interface ISearchSphinxLayer {
  /**
   * ID слоя
   */
  id: TLayerID

  /**
   * Тип найденной записи
   */
  'index-type': EIndexType.Layer

  /**
   * Название слоя
   */
  name: string

  /**
   * ID родительсого слоя
   */
  parent: TLayerID | null

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
  type_uid: TLayerTypeID

  /**
   * Данные плагина ExtendedFields
   */
  [EPlugin.ExtendedFields]: NPluginExtendedFields.LayerSearch[]
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
  'index-type': EIndexType.Booking
}
