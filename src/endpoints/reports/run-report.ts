import { IGetRequestBody } from '../../blocks'

/**
 * Данные запроса для получения данных о конкретном отчете
 *
 * {@link https://doc.leader.ironstar.pw/#/05-%D0%9E%D1%82%D1%87%D0%B5%D1%82%D1%8B/meta_report_run}
 */
export interface IRunReport extends IGetRequestBody {
  /**
   * Данные отчета
   */
  report: Record<string, string | null>[]
}
