import {
  TCustomFieldID,
  ECustomFieldType,
  HEX,
  TLayerTypeID,
  TMetablockID,
  TPointTypeID,
  TWorkspaceID,
} from '../common.types'
import { IGetRequestBody, IImageObject, IProjectAccess } from '../blocks'
import { EPlugin, NPluginBookings, NPluginExtendedFields } from '../plugins'

/**
 * Ответ запроса {@link https://doc.leader.ironstar.pw/#/01-project/project_metadata|GET /project/{workspace_id}/{project_id}/API?action=project_metadata}
 */
export interface IEndpointProjectMetadata
  extends IGetRequestBody,
    IProjectAccess {
  /**
   * Метаданные проекта
   */
  metablock: IMetablock

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
  id: TMetablockID

  /**
   * Описание метаблока
   */
  info: string

  /**
   * Список с типами слоёв
   */
  layers: Record<TLayerTypeID, ILayerType>

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
  plugins: EPlugin[]

  /**
   * Id воркспейса, которому принадлежит метаблок
   */
  workspace_id: TWorkspaceID

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
  uid: TPointTypeID

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
  containers: TLayerTypeID[]

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
    Record<EPlugin, Record<string, any>> & {
      [EPlugin.Bookings]: NPluginBookings.Point
      [EPlugin.ExtendedFields]: {
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
  id: TCustomFieldID

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
  type_id: ECustomFieldType

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
  uid: TLayerTypeID

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
  containers: TLayerTypeID[]

  /**
   * Список с данными плагинов
   *
   * Каждый плагин имеет свой уникальный ID, одинаковый в каждом проекте.
   * Для получения данных определенного плагина, используй enum Plugins.
   */
  plugin_data: Partial<
    Record<EPlugin, Record<string, any>> & {
      [EPlugin.Bookings]: NPluginBookings.LayerType
      [EPlugin.ExtendedFields]: NPluginExtendedFields.LayerType
    }
  >
}