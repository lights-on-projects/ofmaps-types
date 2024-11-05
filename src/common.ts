/**
 * Названия и id плагинов
 *
 * @link https://demoadmin.officescheme.ru/admin/Info/API?action=list_plugins
 */
export enum Plugins {
  /**
   * Сохраняет инфу о том кем и когда была создана бронь
   */
  BookingAuthoring = 'pacd6f213c8bcb444aba21730cf063d3',

  /**
   * Спамит пользователей инфой о созданных бронях
   */
  BookingMailBomber = 'p6b4f6ae7af4c49009e23e4062ad6e977',

  /**
   * Расширенные правила бронирования
   */
  BookingRules = 'p9f599e30a6f14828970042bb50d61e9e',

  /**
   * Расширяет подсказку точки пользовательскими данными. Требуется полевой плагин
   */
  PointTooltip = 'aae17fff117f4a16a50fa1288c4ed9e8',

  /**
   * Отправляет сообщения в rsyslog
   */
  rfc5424 = 'ada143e2081194ba98eefb45fad6c2365',

  /**
   * Пользователи могут забронировать некоторые типы объектов на любое время
   */
  Bookings = '53d02367136147b8b5187d109256ce74',

  /**
   * Размещает новые точки в центре многоугольника, помещает перенесенные точки в центр многоугольника.
   */
  Centrator = 'e08f6b0a0dd34ef8ab2e405661d3b8ea',

  /**
   * Позволяет определять расширенные поля в метаданных и использовать их в слоях
   */
  ExtendedFields = 'f7222e6eb7114fbd865be059646cbc53',

  /**
   * Включает аутентификацию OpenID в воркспейсе
   */
  openid = 'pac2dc85217d4e4477c8fca8c2e27272f18',

  /**
   * Включает аутентификацию Saml в воркспейсе
   */
  saml = 'pac867b6def6c4d9fb71ffdb975051f0d',

  /**
   * Позволяет определять расширенные поля для пользователей и предоставляет некоторые утилиты для импорта пользователей
   */
  UserFields = 'd56e0e5438ea4f7e81c820fdd380ef4e',
}

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
 * ID слоя
 */
export type LayerID = string & { __brand: 'LayerID' }

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
