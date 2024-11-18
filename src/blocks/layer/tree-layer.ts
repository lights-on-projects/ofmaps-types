import { TLayerID, TLayerIDString } from '../../common.types'

/**
 * Данные слоя на уровне древа
 */
export interface ITreeLayer {
  /**
   * @todo
   */
  cachedrop: string

  /**
   * Дочерние слои
   */
  childs: ITreeLayer[]

  /**
   * Строковый ID слоя
   */
  key: TLayerIDString

  /**
   * ID родительского слоя
   */
  parent_id: TLayerID | null

  /**
   * Строковый ID родительского слоя
   */
  parent_key: TLayerIDString | null

  /**
   * Данные плагинов
   *
   * @todo Похоже, что св-во всегда возвращает пустой массив, т.к. get_layer того же слоя возвращает объект с данными
   */
  plugin_data: unknown[]

  /**
   * @todo
   */
  raw_data: unknown | null
}
