import { UserRole } from '../common.types'
import { IProjectUserData, IGetRequestBody, ITreeLayer } from '../blocks'

/**
 * Описание запроса {@link https://doc.leader.ironstar.pw/#/01-project/project_tree|GET /project/workspace_id/project_id/API?action=project_tree}
 */
export interface IEndpointProjectTree extends IGetRequestBody {
  /**
   * Права доступа к текущему проекту
   */
  project_access: UserRole

  /**
   * Данные пользователя для работы с проектом
   */
  project_user_data: IProjectUserData

  /**
   * Древо со слоями
   */
  tree: ITreeLayer[]
}
