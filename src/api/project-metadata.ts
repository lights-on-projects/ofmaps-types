import {
  CustomFieldID,
  CustomFieldType,
  HEX,
  IconID,
  IImageObject,
  LayerTypeID,
  MetablockID,
  PointTypeID,
  UserRole,
  WorkspaceID,
} from '../common.types'
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
  id: MetablockID

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
  nodes: IPointType[]

  /**
   * Список включенных плагинов
   */
  plugins: Plugins[]

  /**
   * Id воркспейса, которому принадлежит метаблок
   */
  workspace_id: WorkspaceID

  /**
   * Название воркспейса, которому принадлежит метаблок
   */
  workspace_name: string
}

/**
 * Тип точки
 */
export interface IPointType {
  /**
   * ID типа точки
   */
  uid: PointTypeID

  /**
   * Точка может быть размещена в любом типе слоев
   */
  anywhere: boolean

  /**
   * Цвет фона точки
   */
  background: HEX

  /**
   * Цвет обводки точки
   */
  border: HEX

  /**
   * Массив с ID типов слоев, внутри которых точка может быть размещена
   */
  containers: LayerTypeID[]

  /**
   * Объект иконки типа точки
   */
  icon: IImageObject

  /**
   * Описание типа точки
   */
  info: string | null

  /**
   * Название типа точки
   */
  name: string

  /**
   * Радиус скругления точки (px)
   */
  radius: number

  /**
   * Размерный коэффициент типа точки
   */
  size_k: number

  /**
   * Данные плагинов для типа точки
   */
  plugin_data: Partial<
    Record<Plugins, Record<string, any>> & {
      [Plugins.Bookings]: IPluginBookings.PointType
      [Plugins.ExtendedFields]: {
        fields: ICustomField[]
      }
    }
  >
}

/**
 * Кастомное поле
 */
export interface ICustomField {
  /**
   * ID поля
   */
  id: CustomFieldID

  /**
   * @todo
   */
  block: string

  /**
   * Дополнительная информация (зависит от поля)
   */
  extension: string | null

  /**
   * Поле должно быть в выдаче листера при определенных запросах. Может пригодиться для отчётов
   */
  lister: boolean

  /**
   * Название поля
   */
  name: string

  /**
   * Поле обязательно для заполнения
   */
  obligate: boolean

  /**
   * Порядок сортровки (по отношению к другим полям)
   */
  sort: number

  /**
   * Строковый id кастомного типа поля
   */
  type_id: CustomFieldType

  /**
   * Название типа кастомного поля
   */
  type_name: string
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
  icon: IImageObject

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
