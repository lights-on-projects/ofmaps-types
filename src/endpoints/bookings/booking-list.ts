import {
  IGetRequestBody,
  IProjectAccess,
  ITableRequestBody,
} from '../../blocks'

/**
 * Данные запроса для получения списка броней
 *
 * {@link https://doc.leader.ironstar.pw/#/02-booking%20plugin/booking_list}
 */
export interface IBookingList
  extends IGetRequestBody,
    ITableRequestBody,
    IProjectAccess {
  /**
   * @todo
   */
  'booking:map-role': unknown

  /**
   * @todo
   */
  'booking:map-user': unknown | null

  /**
   * Массив с записями
   *
   * Запрос является табличным, а значит, все возвращаемые св-ва имеют строковый тип данных.
   * Приведение свойств к правильному типу - задача фронта
   *
   * @todo Неясно какие могут быть кастомные поля
   */
  items: (Record<string, string | null> & IBookingListItem)[]
}

/**
 * Данные элемента списка с бронями
 */
export interface IBookingListItem {
  /**
   * ID брони
   *
   * По факту, является типом BookingID, но бэк возвращает строку.
   * На фронте нужно конвертировать значение в number
   */
  id: string

  /**
   * ID забронированной точки
   *
   * По факту, PointID
   * На фронте нужно конвертировать значение в number
   */
  bookable_id: string

  /**
   * @todo
   */
  booking_custom_data: string

  /**
   * Тип бронируемой сущности
   *
   * - "0" - точка
   * - "1" - слой
   *
   * На фронте конвертировать в number
   */
  booking_type: string

  /**
   * Время начала брони
   *
   * В формате ISO
   */
  start: string

  /**
   * Время завершения брони
   *
   * В формате ISO. Вернется null, если бронь бесконечная,
   * т.е. у нее нет даты завершения
   */
  end: string

  /**
   * Перечисленные через запятую временные отрезки брони (гапы).
   *
   * @todo Определено только для постоянных (рекуррентных) бронь?
   */
  gap: string | null

  /**
   * Бронь является мастер-броней
   *
   * - "0" - да
   * - "1" - нет
   *
   * На фронте конвертировать в boolean
   */
  is_master: string

  /**
   * Массив с названиями родительских слоев
   * от ближайшего до дальнего
   */
  location: string[]

  /**
   * @todo
   */
  master_booking: string | null

  /**
   * Название точки
   */
  name: string

  /**
   * ID слоя, на котором расположена точка
   *
   * По факту, LayerID
   * На фронте конвертировать в number
   */
  parent_layer_id: string

  /**
   * Бронь является постоянной (рекуррентной)
   */
  rec: string

  /**
   * ID типа забронированной точки
   *
   * По факту, PointTypeID
   * На фронте конвертировать в number
   */
  type_uid: string

  /**
   * Имя пользователя
   */
  user: string

  /**
   * ID пользователя, которому принадлежит бронь
   *
   * По факту, UserID
   * На фронте конвертировать в number
   */
  user_id: string

  /**
   * Логин пользователя
   */
  user_login: string
}
