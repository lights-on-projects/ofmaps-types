import { LayerID, LayerIDString } from '../../common.types'

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
  key: LayerIDString

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
   *
   * @todo Похоже, что св-во всегда возвращает пустой массив, т.к. get_layer того же слоя возвращает объект с данными
   */
  plugin_data: unknown[]

  /**
   * @todo
   */
  raw_data: unknown | null
}
