import { IGetRequestBody } from '../blocks'
import { ReportAccessLevel, ReportID } from '../common.types'
import { Plugins } from '../plugins'

/**
 * Данные запроса для получения списка доступных отчетов
 */
export interface IEnumReports extends Omit<IGetRequestBody, 'ws_auth'> {
  /**
   * Список доступных отчетов
   */
  reports: IReportInfo[]
}

/**
 * Данные отчета
 */
export interface IReportInfo {
  /**
   * Уровень доступа пользователя, необходимый для получения данных отчета
   *
   * - anybody - отчет доступен всем
   * - user - отчет доступен пользователям проекта
   * - wpadmin - отчет доступен только администраторам проекта/воркспейса
   * - sadmin - только админинстраторам инстанса (тоесть с нового фронта недоступен никому)
   */
  access_level: ReportAccessLevel

  /**
   * Колонки отчета
   */
  columns: Record<string, string>

  /**
   * Описание отчета
   */
  info: string

  /**
   * Название отчета
   */
  name: string

  /**
   * Список входных параметров отчета и применяемых к ним фильтров
   *
   * @todo неизвестно, какие могут быть параметры
   */
  parameters: Record<string, string[]>

  /**
   * Идентификатор плага, предоставляющего отчет. Если отчет предоставлен основным приложением - тут будет null
   *
   * Нигде не используется
   * @deprecated
   */
  plugin_id: Plugins

  /**
   * ID отчета
   */
  report_id: ReportID
}
