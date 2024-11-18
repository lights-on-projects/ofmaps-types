import { TAuthToken, ERequestStatus } from '../../common.types'

/**
 * Общие поля, которые содержит любой запрос
 */
export interface IGetRequestBody {
  /**
   * Данные авторизации
   * @todo неизвестно для чего используется
   */
  authorization: {
    /**
     * Токен для авторизации. Всегда invalid
     * @deprecated
     */
    auth_token: 'invalid'
  }

  /**
   * Название контроллера. Информация для бэка, на фронте не нужно
   * @deprecated
   */
  controller?: string

  /**
   * Статус запроса
   *
   * - Вернет ok, если запрос выполнен успешно
   * - Вернет error, если запрос вернул ошибку
   * - Вернет auth, если для выполнения запроса требуется авторизация.
   *
   * У некоторых запросов,
   * например get_me, при ошибке авторизации вернется error, а не auth.
   */
  status: ERequestStatus

  /**
   * Информация об ошибке
   *
   * Поле доступно только если запрос возвращает ошибку
   */
  error_info: IErrorInfo

  /**
   * Данные для авторизации
   */
  ws_auth: {
    /**
     * Токен для авторизации
     *
     * Если токена нет, будет иметь значение `-invalid-`
     */
    wst: TAuthToken | '-invalid-'
  }
}

/**
 * Информация об ошибке
 */
export interface IErrorInfo {
  /**
   * Описание ошибки
   */
  message: string

  /**
   * Место возникновения ошибки
   */
  place: string

  /**
   * Трейс ошибки
   */
  trace: string
}
