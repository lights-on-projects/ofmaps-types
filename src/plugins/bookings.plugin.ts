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
   * Данные плагина для текущего пользователя
   */
  export interface CurrentUser {
    /**
     * Категории бронирования доступные пользователю
     */
    categories: string[]
  }
}
