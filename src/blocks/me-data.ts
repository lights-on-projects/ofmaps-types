import {
  TProjectIDString,
  TUserID,
  EUserRole,
  TWorkspaceID,
} from '../common.types'

/**
 * Данные текущего пользователя
 */
export interface IMeData {
  /**
   * Пользователь является суперадмином
   */
  root_admin: boolean

  /**
   * Данные пользователя
   */
  ui: IMeDataUI
}

/**
 * Данные пользователя
 */
export interface IMeDataUI {
  /**
   * Техническое поле
   * @deprecated
   */
  class_version: string

  /**
   * Имя пользователя
   */
  display: string

  /**
   * @deprecated
   */
  enabled: boolean

  /**
   * Логин пользователя
   */
  login: string

  /**
   * Пароль пользователя
   */
  password: '*'

  /**
   * Проекты, к которым пользователь имеет доступ.
   * Ключ - строковый id проекта, значение - роль пользователя.
   */
  projects: Record<TProjectIDString, EUserRole>

  /**
   * Роль пользователя в воркспейсе
   */
  role: EUserRole.Admin | EUserRole.Client

  /**
   * Дубликат role
   * @deprecated
   */
  role_id: EUserRole

  /**
   * ID пользователя
   */
  user_id: TUserID

  /**
   * ID воркспейса
   */
  workspace_id: TWorkspaceID
}
