import { IGetRequestBody, IProjectAccess } from '../blocks'
import { UserFieldType } from '../common.types'

/**
 * Набор полей пользователя определенных в текущем воркспейсе
 *
 * {@link https://doc.leader.ironstar.pw/#/03-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F/project_get_runtime_fields_and_plugins_ws_user}
 */
export interface IGetRuntimeFieldsWsUser
  extends IGetRequestBody,
    IProjectAccess {
  /**
   * Список полей
   */
  required_fields: IRequiredField[]
}

/**
 * Данные поля
 */
export interface IRequiredField {
  /**
   * Алиас поля (уникальный)
   */
  alias: string

  /**
   * Атрибут поля (Техническое поле)
   * @deprecated
   */
  attribute: unknown | null

  /**
   * @todo
   */
  block: string

  /**
   * Указание при построении интерфейса добавить определенный css класс к контейнеру поля
   *
   * Используется только в админке
   */
  css: string

  /**
   * Указание использовать для аплоада любой конструкции с этим полем multipart (как правило установлено только у картинок)
   */
  fappendmode: boolean

  /**
   * Плейсхолдер
   *
   * Используется только в админке
   */
  hint: string

  /**
   * Название поля
   */
  label: string

  /**
   * Битовая маска со следующими флагами:
   *
   * - OPTION_NULLABLE(0x01) - поле может быть пустым
   * - OPTION_INDEX(0x02) - по полю существует индекс, т.е. возможна фильтрация
   * - OPTION_LISTER(0x04) - поле может выводится в списки
   * - OPTION_UNIQUE(0x08) - по полю существует уникальный индекс
   */
  mask: number

  /**
   * Опции поля. Значение зависит от типа поля
   *
   * Если опций нет, в значении будет определн пустой массив
   */
  options:
    | []
    | {
        /**
         * Значение для поля с type равным select
         */
        select_values: string
      }

  /**
   * Указание откуда брать значение этого поля при загрузке сущности.
   *
   * Пример значения поля:
   *
   * - для booking_category: plugin_data.53d02367136147b8b5187d109256ce74.category
   * - для mail: plugin_data.d56e0e5438ea4f7e81c820fdd380ef4e.field3138905bc7884655866453c695fc29b0
   *
   * @todo: Непонятно из какого plugin_data брать значения. Значения plugin_data в св-ве project_user_data не совпадает с путем этого свойства.
   */
  read_path: string

  /**
   * Порядок сортировки
   */
  sort: number

  /**
   * @todo
   */
  throw_import: boolean

  /**
   * Тип поля
   */
  type: UserFieldType

  /**
   * ID поля
   */
  uid: string

  /**
   * Куда класть значение поля при сохранении сущности
   *
   * @todo св-во скорее всего используется только в админке.
   */
  write_path: string
}
