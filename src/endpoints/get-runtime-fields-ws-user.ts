import { IGetRequestBody, IProjectAccess, IRuntimeField } from '../blocks'

/**
 * Набор полей пользователя определенных в текущем воркспейсе
 *
 * {@link https://doc.leader.ironstar.pw/#/03-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F/project_get_runtime_fields_and_plugins_ws_user}
 */
export interface IGetRuntimeFieldsWsUser extends IGetRequestBody, IProjectAccess {
  /**
   * Список полей
   */
  required_fields: IRuntimeField[]
}
