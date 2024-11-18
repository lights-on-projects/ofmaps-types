import {
  IGetRequestBody,
  IPointInfo,
  IPointInfoSimple,
  IProjectAccess,
} from '../blocks'

/**
 * Описание данных метода для получения данных о точке для брони
 *
 * {@link https://doc.leader.ironstar.pw/#/02-booking%20plugin/get_node_for_booking}
 */
export interface IGetPointForBooking extends IGetRequestBody, IProjectAccess {
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
