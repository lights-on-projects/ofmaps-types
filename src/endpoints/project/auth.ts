import { IGetRequestBody, IMeData } from '../../blocks'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/00-authorization/app_auth|POST /App/Auth/API?action=auth}
 */
export interface IEndpointAuth extends IGetRequestBody {
  /**
   * Данные текущего пользователя
   */
  me_data: IMeData
}
