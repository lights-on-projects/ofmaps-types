/**
 * Данные плагина Bookings
 */
export interface PluginBookingsOfLayerType {
  /**
   * Данный тип можно забронировать
   */
  bookable: true

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
 * Данные плагина Bookings для текущего пользователя
 */
export interface PluginBookingsOfCurrentUser {
  /**
   * Категории бронирования доступные пользователю
   */
  categories: string[]
}
