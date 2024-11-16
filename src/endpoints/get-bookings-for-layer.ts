import { IGetRequestBody, IProjectAccess } from '../blocks'
import { DateTimeISO, LayerID, PointIDString, UserID } from '../common.types'

/**
 * Получить список броней для определенного слоя
 *
 * {@link https://doc.leader.ironstar.pw/#/02-booking%20plugin/get_bookings_for_layer}
 */
export interface IGetBookingsForLayer extends IGetRequestBody, IProjectAccess {
  /**
   * ID слоя, для которого запрашиваются брони
   */
  requested_layer_id: LayerID

  /**
   * Список броней
   */
  bookings: IBooking[]
}

/**
 * Данные брони
 */
export interface IBooking {
  /**
   * @todo
   */
  booking_custom_data: string

  /**
   * ID брони (строка)
   *
   * По факту, является типом BookingID, но бэк возвращает строку.
   * На фронте нужно конвертировать значение в number
   */
  booking_id: string

  /**
   * Имя пользователя, которому принадлежит бронь
   */
  display: string

  /**
   * Перечисленные через запятую временные отрезки брони (гапы).
   *
   * Определено только для постоянных (рекуррентных) бронь.
   */
  gap: string | null

  /**
   * Строковый ID забронированной точки
   */
  key: PointIDString

  /**
   * ID забронированной точки (строка)
   *
   * Бэк по непонятным причинам возвращает строку вместо номера.
   * На стороне фронта тип данных этого св-ва нужно конвертировать в number.
   * Значение может содержать только цифры.
   */
  point_id: string

  /**
   * Бронь является постоянной (рекуррентной)
   *
   * - "0" - нет
   * - "1" - да
   *
   * Данные св-ва нужно конвертировать в Boolean на стороне фронта
   */
  recurrence: '0' | '1'

  /**
   * Дата начала брони
   */
  start: DateTimeISO

  /**
   * Дата завершения брони
   */
  end: DateTimeISO

  /**
   * ID пользователя, которому принадлежит бронь
   */
  user_id: UserID

  /**
   * Временной штамп последнего обновления пользователя
   *
   * Время в формате UNIX. Содержит только цифры.
   *
   * @todo непонятно для чего и чо значит "временный штамп последнего обновления". Обновления чего?
   */
  user_uts: string
}
