import {
  HEX,
  LayerID,
  LayerIDString,
  LayerTypeID,
  UserRole,
  ProjectUserDataType,
} from '../shared'
import { GetRequestBody } from './get-request-body'

/**
 * Описание запроса {@link https://doc.leader.ironstar.pw/#/01-project/project_tree|GET /project/workspace_id/project_id/API?action=project_tree}
 */
export interface EndpointProjectTreeType extends GetRequestBody {
  /**
   * Права доступа к текущему проекту
   */
  project_access: UserRole

  /**
   * Данные пользователя для работы с проектом
   */
  project_user_data: ProjectUserDataType

  /**
   * Древо со слоями
   */
  tree: LayerOfTreeType[]
}

/**
 * Данные слоя на уровне древа
 */
export type LayerOfTreeType = {
  /**
   * ID слоя
   */
  id: LayerID

  /**
   * ID типа слоя
   */
  type_uid: LayerTypeID

  /**
   * @todo
   */
  border_weight: number

  /**
   * Ширина обводки меток
   */
  borderwidth: number

  /**
   * @todo
   */
  cachedrop: string

  /**
   * @todo
   */
  child_border_width: number

  /**
   * Дочерние слои
   */
  childs: LayerOfTreeType[]

  /**
   * Текст метки нужно обрезать
   */
  clip_text: boolean

  /**
   * Цвет текста меток на карте
   */
  color: HEX

  /**
   * @todo
   */
  font_options: number

  /**
   * Размер текста меток на карте
   */
  font_size: number

  /**
   * Строковый ID слоя
   */
  key: LayerIDString

  /**
   * Разметка
   */
  label_size: number

  /**
   * Название слоя
   */
  name: string

  /**
   * Содержит подложку (карту)
   */
  own_view: boolean

  /**
   * ID родительского слоя
   */
  parent_id: LayerID | null

  /**
   * Строковый ID родительского слоя
   */
  parent_key: LayerIDString | null

  /**
   * Данные плагинов
   */
  plugin_data: unknown

  /**
   * @todo
   */
  raw_data: unknown | null

  /**
   * Текст метки нужно масштабировать при масштабировании карты
   */
  scale_text: boolean

  /**
   * Порядок сортировки
   *
   * Каждый слой имеет уникальный индекс, по величине которого определяется порядок сортировки
   */
  sort: number

  /**
   * Текст метки нужно переносить
   */
  wrap_text: boolean
}
