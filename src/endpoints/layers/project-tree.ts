import { IGetRequestBody, ITreeLayer, IProjectAccess } from '../../blocks'

/**
 * Описание запроса {@link https://doc.leader.ironstar.pw/#/01-project/project_tree|GET /project/workspace_id/project_id/API?action=project_tree}
 */
export interface IEndpointProjectTree extends IGetRequestBody, IProjectAccess {
  /**
   * Древо со слоями
   */
  tree: ITreeLayer[]
}
