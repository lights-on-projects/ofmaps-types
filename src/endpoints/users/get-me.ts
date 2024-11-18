import { IGetRequestBody, IMeData } from '../../blocks'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/00-authorization/app_get_me|GET /App/Auth/API?action=get_me&id={workspace_id}}
 */
export interface IEndpointGetMe extends IGetRequestBody {
  /**
   * Данные текущего пользователя
   */
  me_data: IMeData
}
