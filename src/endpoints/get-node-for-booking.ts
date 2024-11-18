import {
  IGetRequestBody,
  IPointInfo,
  IPointInfoSimple,
  IProjectAccess,
} from '../blocks'

export interface IGetNodeForBooking extends IGetRequestBody, IProjectAccess {
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
