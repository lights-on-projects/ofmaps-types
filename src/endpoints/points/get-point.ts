import { IGetRequestBody, IPointInfo, IProjectAccess } from '../../blocks'

/**
 * Ответа запроса для получени данные точки
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/get_node}
 */
export interface IGetPoint extends IGetRequestBody, IProjectAccess {
  /**
   * Данные точки
   */
  node_info: IPointInfo
}
