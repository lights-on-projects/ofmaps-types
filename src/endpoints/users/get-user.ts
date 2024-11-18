import { IGetRequestBody, IImageObject, IProjectAccess } from '../../blocks'
import { TUserID, EUserRole, TWorkspaceID } from '../../common.types'
import { NPluginBookings, NPluginUserFields, EPlugin } from '../../plugins'

/**
 * Ответа запроса для получени данные точки
 *
 * {@link https://doc.leader.ironstar.pw/#/03-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F/project_get_user}
 */
export interface IGetUser extends IGetRequestBody, IProjectAccess {
  /**
   * Данные пользователя
   */
  user: IUserInfo
}

/**
 * Данные пользователя
 */
export interface IUserInfo {
  /**
   * Объект с данными изображения (аватарка пользователя)
   */
  default_image: IImageObject

  /**
   * Полное имя пользователя
   */
  display: string

  /**
   * Пользователь активен
   *
   * Неактивный пользователь остается в системе, но войти не может
   * @deprecated
   */
  enabled: boolean

  /**
   * ID пользователя
   */
  id: TUserID

  /**
   * Логин пользователя
   */
  login: string

  /**
   * Данные плагинов
   */
  plugin_data: Partial<{
    [EPlugin.Bookings]: NPluginBookings.User
    [EPlugin.UserFields]: NPluginUserFields.User
  }>

  /**
   * Флаг защищенного пользователя.
   *
   * Защищенный пользователь не удаляется при отсутствии в источнике импорта.
   * На фронте не используется.
   */
  protected: boolean

  /**
   * Роль пользователя
   */
  role: EUserRole

  /**
   * Таймштамп последнего обновления данных пользователя
   *
   * Возвращается строка, которая содержит только цифры.
   * На стороне фронта ее надо конвертировать в число или сразу в дату.
   * Значение определено в секундах
   */
  updated_timestamp: string

  /**
   * ID воркспейса, которому принадлежит пользователь
   */
  workspace_id: TWorkspaceID
}
