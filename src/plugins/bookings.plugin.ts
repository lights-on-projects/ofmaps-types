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
     * @todo
     */
    locations: unknown[]
  }
}
