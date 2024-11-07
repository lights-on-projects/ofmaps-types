/**
 * Токен для аутентификации
 */
export type AuthToken = string & { __brand: 'AuthToken' }

/**
 * ID воркспейса
 */
export type WorkspaceID = number & { __brand: 'WorkspaceID' }

/**
 * ID проекта
 */
export type ProjectID = number & { __brand: 'ProjectID' }

/**
 * ID типа слоя
 */
export type LayerTypeID = string & { __brand: 'LayerTypeID' }

/**
 * ID слоя
 */
export type LayerID = number & {
  __brand: 'LayerID'
}

/**
 * Строковый ID слоя
 */
export type LayerIDString = `N${LayerID}`

/**
 * ID точки
 */
export type PointID = string & { __brand: 'PointID' }

/**
 * ID пользователя
 */
export type UserID = number & { __brand: 'UserID' }

/**
 * Цвет в формате HEX
 */
export type HEX = string & { __brand: 'HEX' }

/**
 * Цвет в формате RGB
 */
export type RGB = string & { __brand: 'RGB' }

/**
 * Роли пользователя
 */
export enum UserRole {
  Admin = 'admin',
  Client = 'client',
  None = 'none',
}

/**
 * Типы кастомных полей
 */
export enum CustomFieldType {
  /**
   * Логический (да/нет)
   */
  Boolean = 'bool',

  /**
   * Строка до 16мб
   */
  BigString = 'btext',

  /**
   * Строка до 512 символов utf8mb4 (2048 ascii)
   */
  String = 'string',

  /**
   * Электронная почта
   */
  Email = 'email',

  /**
   * xml/html текст до 16мб
   */
  XML = 'xml',

  /**
   * Номер телефона
   */
  Phone = 'phone',

  /**
   * Целое число
   */
  Integer = 'int',

  /**
   * Число с плавающей точкой
   */
  Double = 'double',

  /**
   * Дата
   * @todo в каком формате?
   */
  Date = 'date',

  /**
   * Дата со временем
   * @todo в каком формате?
   */
  DateTime = 'datetime',

  /**
   * Набор изображений
   */
  Gallery = 'gallery',

  /**
   * Изображение (одно)
   */
  Image = 'image',
}
