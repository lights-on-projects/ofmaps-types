import { IGetRequestBody, INodeInfo, IProjectAccess } from '../blocks'
import { MetablockID, ProjectID, WorkspaceID } from '../common.types'

export interface IGetNodeForBooking extends IGetRequestBody, IProjectAccess {
  /**
   * Данные запрошенной точки
   */
  node_info: INodeInfo

  /**
   * Массив с данными точек, на том же слое
   *
   * Массив также включает запрашиваемую точку
   */
  similary_list: INodeInfoSimple[]
}

/**
 * Упрощенный объект с данными точки
 *
 * Большая часть данных аналогична INodeInfo
 */
export interface INodeInfoSimple
  extends Pick<
    INodeInfo,
    'id' | 'name' | 'parent' | 'plugin_data' | 'size_k' | 'type_uid' | 'x' | 'y'
  > {
  /**
   * ID метаблока
   */
  metablock: MetablockID

  /**
   * ID проекта
   */
  project: ProjectID

  /**
   * @todo
   */
  raw_data: unknown | null

  /**
   * Название типа точки
   */
  type_name: string

  /**
   * ID воркспейса
   */
  workspace: WorkspaceID
}
