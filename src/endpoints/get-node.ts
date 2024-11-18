import { IGetRequestBody, INodeInfo, IProjectAccess } from '../blocks'

/**
 * Ответа запроса для получени данные точки
 *
 * {@link https://doc.leader.ironstar.pw/#/01-project/get_node}
 */
export interface IGetNode extends IGetRequestBody, IProjectAccess {
  /**
   * Данные точки
   */
  node_info: INodeInfo
}
