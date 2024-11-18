import {
  IGetRequestBody,
  IPointInfo,
  IPointInfoSimple,
  IProjectAccess,
} from '../blocks'
import {
  DateTimeISO,
  MetablockID,
  PointID,
  ProjectID,
  UserID,
  WorkspaceID,
} from '../common.types'
import { Plugins } from '../plugins'
import { INodeBookingViewV2Item } from './node-booking-view-v2'

/**
 * Данные запроса для получения данных брони.
 *
 * Метод доступен только админам
 *
 * {@link https://doc.leader.ironstar.pw/#/02-booking%20plugin/load_node_booking_extended}
 */
export interface ILoadNodeBookingExtended
  extends IGetRequestBody,
    IProjectAccess {
  /**
   * Описание брони
   */
  booking: unknown

  /**
   * Данные запрошенной точки
   */
  node_info: IPointInfo

  /**
   * Массив с данными точек, на том же слое
   *
   * Массив также включает запрашиваемую точку
   */
  similary_list: IPointInfoSimple[]
}

/**
 * Данные брони
 */
export interface IPointBookingExtended
  extends Pick<
    INodeBookingViewV2Item,
    'id' | 'start' | 'end' | 'gap' | 'rec' | 'user_name'
  > {
  /**
   * Тип брони
   *
   * 1 - обычная
   * 2 - рекуррентная
   * 3 - вечная
   *
   * @todo разве рекуррентная бронь это не постоянная? В чем отличие вечной от рекуррентной?
   */
  booking_type: number

  /**
   * Массив интервалов, которые занимают дочерние брони.
   *
   * Для вечных и рекуррентных броней - null
   */
  childs: [DateTimeISO, DateTimeISO][] | null

  /**
   * Пользовательские данные (строка)
   */
  custom_data: string

  /**
   * Является мастер-бронью
   */
  is_master: boolean

  /**
   * ID метаблока
   */
  metablock: MetablockID

  /**
   * ID точки
   */
  node_id: PointID

  /**
   * ID плагина
   */
  plugin_id: Plugins

  /**
   * ID проекта
   */
  project: ProjectID

  /**
   * ID пользователя
   */
  user_id: UserID

  /**
   * ID воркспейса
   */
  workspace: WorkspaceID
}
