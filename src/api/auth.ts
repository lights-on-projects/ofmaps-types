import { EndpointGetMeType } from './get-me'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/00-authorization/app_auth|POST /App/Auth/API?action=auth}
 */
export interface EndpointAuthType extends EndpointGetMeType {}
