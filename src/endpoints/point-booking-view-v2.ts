import { IGetRequestBody, IProjectAccess } from '../blocks'
import { TBookingID, DateTimeISO, TPointID, TUserID } from '../common.types'

/**
 * Данные запроса для получения конфликтующих броней определенной точки
 *
 * {@link https://doc.leader.ironstar.pw/#/02-booking%20plugin/node_booking_view_v2}
 */
export interface IPointBookingViewV2 extends IGetRequestBody, IProjectAccess {
  /**
   * Общая информация о конфликтующих бронях
   */
  node_booking_view_v2: IPointBookingViewV2Info

  /**
   * @todo
   */
  request_id: 'undefined'
}

/**
 * Общая информация о конфликтующих бронях у определенной точки
 */
export interface IPointBookingViewV2Info {
  /**
   * Время начала интервала
   */
  start: DateTimeISO

  /**
   * Время завершения интервала
   */
  end: DateTimeISO

  /**
   * Список конфликтов
   */
  items: IPointBookingViewV2Item[]

  /**
   * ID точки
   */
  resource: TPointID

  /**
   * ID пользователя, для которого построен список конфликтов
   */
  user: TUserID
}

/**
 * Конфликтующая бронь
 */
export interface IPointBookingViewV2Item {
  /**
   * ID брони
   */
  id: TBookingID

  /**
   * Время начала брони
   */
  start: DateTimeISO

  /**
   * Время завершения брони
   */
  end: DateTimeISO

  /**
   * Список отрезков времени (гапов), занимаемых бронью
   */
  gap: number[]

  /**
   * ID забронированной точки
   */
  point_id: TPointID

  /**
   * Название забронированной точки
   */
  point_name: string

  /**
   * Название типа забронированной точки
   */
  point_type_name: string

  /**
   * Причина, по которой бронь попала в список
   *
   * @todo какие причины могут быть (список)?
   */
  reason: string

  /**
   * Бронь является постоянной (рекуррентной)
   */
  rec: boolean

  /**
   * ID пользователя - владельца конфликтующей брони
   */
  user: TUserID

  /**
   * Имя пользователя
   */
  user_name: string
}
