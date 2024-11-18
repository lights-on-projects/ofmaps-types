/**
 * Токен для аутентификации
 */
export type TAuthToken = string & { __brand: 'AuthToken' }

/**
 * ID воркспейса
 */
export type TWorkspaceID = number & { __brand: 'WorkspaceID' }

/**
 * ID метаблока
 */
export type TMetablockID = number & { __brand: 'MetablockID' }

/**
 * ID проекта
 */
export type TProjectID = number & { __brand: 'ProjectID' }

/**
 * Строковый ID проекта
 *
 * Использует шаблон `P${ProjectID}`
 */
export type TProjectIDString = string & { __brand: 'ProjectIDString' }

/**
 * ID типа слоя
 */
export type TLayerTypeID = string & { __brand: 'LayerTypeID' }

/**
 * Название типа слоя
 */
export type TLayerTypeName = string & { __brand: 'LayerTypeName' }

/**
 * ID слоя
 */
export type TLayerID = number & { __brand: 'LayerID' }

/**
 * Строковый ID слоя
 *
 * Использует шаблон `N${LayerID}`
 */
export type TLayerIDString = string & { __brand: 'LayerIDString' }

/**
 * ID точки
 */
export type TPointID = number & { __brand: 'PointID' }

/**
 * Строковый ID слоя
 *
 * Использует шаблон `P${PointID}`
 */
export type TPointIDString = string & { __brand: 'PointIDString' }

/**
 * ID типа точки
 */
export type TPointTypeID = string & { __brand: 'PointTypeID' }

/**
 * Название типа точки
 */
export type TPointTypeName = string & { __brand: 'PointTypeName' }

/**
 * ID кастомного поля
 */
export type TCustomFieldID = number & { __brand: 'CustomFieldID' }

/**
 * Строковый ID кастомного поля
 *
 * Использует шаблон `f${CustomFieldID}`
 */
export type TCustomFieldIDString = string & { __brand: 'CustomFieldIDString' }

/**
 * ID пользователя
 */
export type TUserID = number & { __brand: 'UserID' }

/**
 * ID поля пользователя
 */
export type TUserFieldID = string & { __brand: 'UserFieldID' }

/**
 * ID иконки
 */
export type TIconID = string & { __brand: 'IconID' }

/**
 * ID брони
 */
export type TBookingID = number & { __brand: 'BookingID' }

/**
 * ID расширенного поля пользователя
 */
export type TExtendedUserFieldID = string & { __brand: 'ExtendedUserField' }

/**
 * ID отчета
 */
export type TReportID = string & { __brand: 'ReportID' }

/**
 * Цвет в формате HEX
 */
export type HEX = string & { __brand: 'HEX' }

/**
 * Цвет в формате RGB
 */
export type RGB = string & { __brand: 'RGB' }

/**
 * Дата в формате ISO
 */
export type DateISO = string & { __brand: 'DateISO' }

/**
 * Дата и время в формате ISO
 */
export type DateTimeISO = string & { __brand: 'DateTimeISO' }

/**
 * Роли пользователя
 */
export enum EUserRole {
  Admin = 'admin',
  Client = 'client',
  None = 'none',
}

/**
 * Типы кастомных полей
 */
export enum ECustomFieldType {
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
export enum EUserFieldType {
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
export enum ERequestStatus {
  /**
   * Запрос выполнен успешно
   */
  Ok = 'ok',

  /**
   * Запрос вернул ошибку
   */
  Error = 'error',

  /**
   * Пользователь не авторизован
   *
   * Для выполнения запроса требуется авторизация
   */
  NotAuthorized = 'auth',
}

/**
 * Уровни доступа пользователей для получения данных отчетов
 */
export enum EReportAccessLevel {
  WpAdmin = 'wpadmin',
  User = 'user',
  Anybody = 'anybody',
  SAdmin = 'sadmin',
}

/**
 * Индексные типы
 */
export enum EIndexType {
  User = 'user',
  Point = 'point',
  Layer = 'layer',
  Booking = 'booking',
}
