import { Brand } from './utils'

/**
 * Токен для аутентификации
 */
export type TAuthToken = Brand<string, 'AuthToken'>

/**
 * ID воркспейса
 */
export type TWorkspaceID = Brand<number, 'WorkspaceID'>

/**
 * ID метаблока
 */
export type TMetablockID = Brand<number, 'MetablockID'>

/**
 * ID проекта
 */
export type TProjectID = Brand<number, 'ProjectID'>

/**
 * Строковый ID проекта
 *
 * Использует шаблон `P${ProjectID}`
 */
export type TProjectIDString = Brand<string, 'ProjectIDString'>

/**
 * ID типа слоя
 */
export type TLayerTypeID = Brand<string, 'LayerTypeID'>

/**
 * Название типа слоя
 */
export type TLayerTypeName = Brand<string, 'LayerTypeName'>

/**
 * ID слоя
 */
export type TLayerID = Brand<number, 'LayerID'>

/**
 * Строковый ID слоя
 *
 * Использует шаблон `N${LayerID}`
 */
export type TLayerIDString = Brand<string, 'LayerIDString'>

/**
 * ID точки
 */
export type TPointID = Brand<number, 'PointID'>

/**
 * Строковый ID слоя
 *
 * Использует шаблон `P${PointID}`
 */
export type TPointIDString = Brand<string, 'PointIDString'>

/**
 * ID типа точки
 */
export type TPointTypeID = Brand<string, 'PointTypeID'>

/**
 * Название типа точки
 */
export type TPointTypeName = Brand<string, 'PointTypeName'>

/**
 * ID кастомного поля
 */
export type TCustomFieldID = Brand<number, 'CustomFieldID'>

/**
 * Строковый ID кастомного поля
 *
 * Использует шаблон `f${CustomFieldID}`
 */
export type TCustomFieldIDString = Brand<string, 'CustomFieldIDString'>

/**
 * ID пользователя
 */
export type TUserID = Brand<number, 'UserID'>

/**
 * ID поля пользователя
 */
export type TUserFieldID = Brand<string, 'UserFieldID'>

/**
 * ID иконки
 */
export type TIconID = Brand<string, 'IconID'>

/**
 * ID брони
 */
export type TBookingID = Brand<number, 'BookingID'>

/**
 * ID расширенного поля пользователя
 */
export type TExtendedUserFieldID = Brand<string, 'ExtendedUserField'>

/**
 * ID отчета
 */
export type TReportID = Brand<string, 'ReportID'>

/**
 * Цвет в формате HEX
 */
export type HEX = Brand<string, 'HEX'>

/**
 * Цвет в формате RGB
 */
export type RGB = Brand<string, 'RGB'>

/**
 * Дата в формате ISO
 */
export type DateISO = Brand<string, 'DateISO'>

/**
 * Дата и время в формате ISO
 */
export type DateTimeISO = Brand<string, 'DateTimeISO'>

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
