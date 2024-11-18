/**`
 * Тело табличного запроса
 */
export interface ITableRequestBody {
  /**
   * Номер страницы
   */
  page: number

  /**
   * Кол-во записей на текущей странице (в массиве items)
   */
  perpage: number

  /**
   * Общее кол-во записей
   */
  total: number
}
