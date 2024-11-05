import { UserID, UserRole, WorkspaceID } from '../common'
import { GetRequestBody } from './get-request-body'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/00-authorization/app_get_me|GET /App/Auth/API?action=get_me&id={workspace_id}}
 */
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

      /**
       * Проекты, к которым пользователь имеет доступ.
       * Ключ - id проекта, значение - роль пользователя.
       *
       * @todo ключ имеет шаблон P<project_id>. Везде ли используется такой формат id проекта? Если да, то
       * в качестве ключа следует указать ProjectID.
       */
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
