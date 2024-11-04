import { UserID, UserRole, WorkspaceID } from '../common'
import { GetRequestBody } from './get-request-body'

export interface EndpointGetMeType extends GetRequestBody {
  /**
   * Данные текущего пользователя
   */
  me_data: {
    /**
     * Пользователь является суперадмином
     */
    root_admin: boolean

    /**
     * Данные пользователя
     */
    ui: {
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

      projects: Record<string, UserRole>

      /**
       * Роль пользователя в воркспейсе
       */
      role: Exclude<UserRole, UserRole.None>

      /**
       * Дубликат role
       * @deprecated
       */
      role_id: UserRole

      /**
       * ID пользователя
       */
      user_id: UserID

      /**
       * ID воркспейса
       */
      workspace_id: WorkspaceID
    }
  }
}
