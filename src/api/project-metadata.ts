import { LayerTypeID, UserRole } from '../common.types'
import { IProjectUserData, IGetRequestBody } from '../blocks'
import { Plugins, IPluginBookings, IPluginExtendedFields } from '../plugins'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/01-project/project_metadata|GET /project/{workspace_id}/{project_id}/API?action=project_metadata}
 */
export interface IEndpointProjectMetadata extends IGetRequestBody {
  /**
   * Метаданные проекта
   */
  metablock: IMetablock

  /**
   * Права доступа к текущему проекту
   */
  project_access: UserRole

  /**
   * Данные пользователя для работы с проектом
   */
  project_user_data: IProjectUserData

  /**
   * Используется для старого фронта
   * @deprecated
   */
  required: unknown

  /**
   * Используется для старого фронта
   * @deprecated
   */
  required_libs: unknown
}

/**
 * Объект метаблока
 */
export interface IMetablock {
  /**
   * Техническое поле
   * @deprecated
   */
  class_version: string

  /**
   * ID метаблока
   */
  id: number

  /**
   * Описание метаблока
   */
  info: string

  /**
   * Список с типами слоёв
   */
  layers: Record<LayerTypeID, ILayerType>

  /**
   * Название метаблока
   */
  name: string

  /**
   * Список с типами точек (объектов)
   */
  nodes: unknown

  /**
   * Список включенных плагинов
   */
  plugins: unknown

  /**
   * Id воркспейса, которому принадлежит метаблок
   */
  workspace_id: number

  /**
   * Название воркспейса, которому принадлежит метаблок
   */
  workspace_name: string
}

/**
 * Тип слоя
 */
export interface ILayerType {
  /**
   * Id слоя
   */
  uid: LayerTypeID

  /**
   * Название типа слоя
   */
  name: string

  /**
   * Описание типа слоя
   */
  info: null | unknown

  /**
   * Слой может быть определен на 1-ом уровне древа слоёв
   */
  root: boolean

  /**
   * Объект с данными иконки типа слоя
   */
  icon: IIconObject

  /**
   * Список ID слоёв, в которых может содержаться слой данного типа
   */
  containers: LayerTypeID[]

  /**
   * Список с данными плагинов
   *
   * Каждый плагин имеет свой уникальный ID, одинаковый в каждом проекте.
   * Для получения данных определенного плагина, используй enum Plugins.
   */
  plugin_data: Partial<
    Record<Plugins, Record<string, any>> & {
      [Plugins.Bookings]: IPluginBookings.LayerType
      [Plugins.ExtendedFields]: IPluginExtendedFields.LayerType
    }
  >
}

/**
 * Объект иконки, возвращаемый сервером
 */
export interface IIconObject {
  /**
   * @todo
   */
  context_name: string

  /**
   * @todo
   */
  crops: unknown[]

  /**
   * Расширение иконки
   */
  extension: string

  /**
   * @todo
   */
  hash: string

  /**
   * ID иконки
   */
  image_id: string

  /**
   * MIME-тип
   */
  mime: string

  /**
   * Безопасный MIME-тип
   *
   * Тоже самое что и `mime`, но вместо слэша - нижнее подчеркивание
   */
  mime_safe: string

  /**
   * ID родительского метаблока
   *
   * Свойство возвращается с типом string. Для дальнейшей работы его нужно конвертировать
   * в number, т.к. значение всегда является числом. Ошибка на стороне бэка.
   */
  owner_id: string

  /**
   * @todo
   */
  properties: unknown[]

  /**
   * @todo
   */
  sort: number

  /**
   * @todo
   */
  valid: boolean
}
