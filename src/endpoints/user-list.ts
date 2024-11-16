import { IGetRequestBody, IProjectAccess, ITableRequestBody } from '../blocks'
import { ExtendedUserFieldID, UserID } from '../common.types'

export interface IUserList
  extends IGetRequestBody,
    IProjectAccess,
    ITableRequestBody {
  /**
   * Массив с записями
   */
  items: (Record<ExtendedUserFieldID, string | null> & IUserListItem)[]
}

/**
 * Данные элемента списка с пользователями
 */
export interface IUserListItem {
  /**
   * ID пользователя
   */
  id: UserID

  /**
   * Название поля
   */
  display: string

  /**
   * Логин пользователя
   */
  login: string

  /**
   * Флаг защищенного пользователя.
   *
   * Защищенный пользователь не удаляется при отсутствии в источнике импорта.
   * На фронте не используется.
   */
  protected: string

  /**
   * Таймштамп последнего обновления данных пользователя
   *
   * Возвращается строка, которая содержит только цифры.
   * На стороне фронта ее надо конвертировать в число или сразу в дату.
   * Значение определено в секундах
   */
  updated_timestamp: string
}
