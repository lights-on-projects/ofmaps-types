import { TMetablockID, TProjectID, TWorkspaceID } from '../../common.types'
import { IPointInfo } from './point-info'

/**
 * Упрощенный объект с данными точки
 *
 * Большая часть данных аналогична IPointInfo
 */
export interface IPointInfoSimple
  extends Pick<
    IPointInfo,
    'id' | 'name' | 'parent' | 'plugin_data' | 'size_k' | 'type_uid' | 'x' | 'y'
  > {
  /**
   * ID метаблока
   */
  metablock: TMetablockID

  /**
   * ID проекта
   */
  project: TProjectID

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
  workspace: TWorkspaceID
}
