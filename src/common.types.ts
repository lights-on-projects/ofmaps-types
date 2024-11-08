/**
 * Токен для аутентификации
 */
export type AuthToken = string & { __brand: 'AuthToken' }

/**
 * ID воркспейса
 */
export type WorkspaceID = number & { __brand: 'WorkspaceID' }

/**
 * ID метаблока
 */
export type MetablockID = number & { __brand: 'MetablockID' }

/**
 * ID проекта
 */
export type ProjectID = number & { __brand: 'ProjectID' }

/**
 * Строковый ID проекта
 */
export type ProjectIDString = `P${ProjectID}` & { __brand: 'ProjectIDString' }

/**
 * ID типа слоя
 */
export type LayerTypeID = string & { __brand: 'LayerTypeID' }

/**
 * ID слоя
 */
export type LayerID = number & { __brand: 'LayerID' }

/**
 * Строковый ID слоя
 */
export type LayerIDString = `N${LayerID}` & { __brand: 'LayerIDString' }

/**
 * ID точки
 */
export type PointID = string & { __brand: 'PointID' }

/**
 * ID типа точки
 */
export type PointTypeID = string & { __brand: 'PointTypeID' }

/**
 * ID кастомного поля
 */
export type CustomFieldID = number & { __brand: 'CustomFieldID' }

/**
 * ID пользователя
 */
export type UserID = number & { __brand: 'UserID' }

/**
 * ID поля пользователя
 */
export type UserFieldID = string & { __brand: 'UserFieldID' }

/**
 * ID иконки
 */
export type IconID = string & { __brand: 'IconID' }

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

/**
 * Типы полей пользователей
 */
export enum UserFieldType {
  /**
   * Логический (да/нет)
   */
  Boolean = 'bool',

  /**
   * Строка до 512 символов utf8mb4 (2048 ascii)
   */
  String = 'string',

  /**
   * Электронная почта
   */
  Email = 'email',

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
   * Поле выбора
   */
  Select = 'select',
}

/**
 * Статус запроса
 */
export enum RequestStatus {
  /**
   * Запрос выполнен успешно
   */
  Ok = 'ok',

  /**
   * Запрос вернул ошибку
   */
  Error = 'error',

  /**
   * Для выполнения запроса требуется авторизация
   */
  Auth = 'auth',
}
