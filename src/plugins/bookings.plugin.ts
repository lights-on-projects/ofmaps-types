import { DateTimeISO, PointTypeID } from '../common.types'

/**
 * Данные плагина Bookings
 */
export namespace IPluginBookings {
  /**
   * Данные плагина для типа слоя
   */
  export interface LayerType {
    /**
     * Данный тип можно забронировать
     */
    bookable: boolean

    /**
     * Категория бронирования по умолчанию
     */
    default_category: string

    /**
     * Стек бронирования по умолчанию
     */
    default_stack: string
  }

  /**
   * Данные плагина для типа слоя
   */
  export interface Layer {
    /**
     * Данный тип можно забронировать
     */
    bookable: boolean

    /**
     * Категория бронирования по умолчанию
     */
    category: string

    /**
     * Стек бронирования по умолчанию
     */
    stack: string
  }

  /**
   * Данные плагина для типа точки
   */
  export interface PointType {
    /**
     * Данный тип можно забронировать
     */
    bookable: boolean

    /**
     * Категория бронирования по умолчанию
     */
    category: string

    /**
     * Стек бронирования по умолчанию
     */
    stack: string
  }

  /**
   * Данные плагина для точки
   */
  export interface Point {
    /**
     * Точка может быть забронирована
     */
    bookable: boolean

    /**
     * Категория бронирования по умолчанию
     */
    default_category: string

    /**
     * Стек бронирования по умолчанию
     */
    default_stack: string
  }

  /**
   * Данные плагина для текущего пользователя
   */
  export interface CurrentUser {
    /**
     * Категории бронирования доступные пользователю
     */
    categories: string[]
  }

  /**
   * Данные плагина для текущего пользователя
   */
  export interface User {
    /**
     * Категории бронирования доступные пользователю
     */
    // Да, CurrentUser и User действительно возвращают одно и то же св-во (categories) с разными типами. Это не ошибка.
    categories: string
  }

  /**
   * Данные плагина для пользователя в результатах поиска
   */
  export interface UserSearch {
    /**
     * Категории бронирования доступные пользователю
     */
    categories: string[]

    /**
     * Места, которые забронировал пользователь
     */
    locations: IUserSearchLocation[]
  }

  /**
   * Данные плагина для точки в результатах поиска
   */
  export interface PointSearch {
    /**
     * Точку можно забронировать
     */
    bookable: boolean

    /**
     * Категории бронирования у точки
     */
    category: string[]

    /**
     * Пользователи, забронировавшие точку
     */
    peoples: IPointSearchUser[]
  }
}

/**
 * Пользователь, забронировавший точку
 */
export interface IPointSearchUser {
  /**
   * Дата начала брони
   */
  begin: DateTimeISO

  /**
   * ID бронирования (строка)
   *
   * По факту, является BookingID.
   * На фронте значение нужно конвертировать в number
   */
  booking_id: string

  /**
   * Дата завершения брони
   *
   * Будет null, если бронь постоянная (рекуррентная)
   */
  end: DateTimeISO | null

  /**
   * Полное имя пользователя
   */
  user_display: string

  /**
   * ID пользователя
   *
   * По факту, является UserID
   * На фронте значение нужно конвертировать в number
   */
  user_id: string

  /**
   * Логин пользователя
   */
  user_login: string
}

/**
 * Место, которое забронировал пользователь
 */
export interface IUserSearchLocation {
  /**
   * Дата начала брони
   */
  begin: DateTimeISO

  /**
   * ID бронирования (строка)
   *
   * По факту, является BookingID.
   * На фронте значение нужно конвертировать в number
   */
  booking_id: string

  /**
   * Дата завершения брони
   *
   * Будет null, если бронь постоянная (рекуррентная)
   */
  end: DateTimeISO | null

  /**
   * ID слоя, на котором расположена забронированная точка
   *
   * По факту, является LayerID
   * На фронте значение нужно конвертировать в number
   */
  layer_id: string

  /**
   * ID забронированной точки
   *
   * По факту, является PointID
   * На фронте значение нужно конвертировать в number
   */
  place_id: string

  /**
   * Название точки
   */
  place_name: string

  /**
   * ID типа точки
   */
  place_type: PointTypeID
}
