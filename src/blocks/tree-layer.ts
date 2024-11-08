import { HEX, LayerID, LayerIDString, LayerTypeID } from '../common.types'

/**
 * Данные слоя на уровне древа
 */
export interface ITreeLayer {
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
  childs: ITreeLayer[]

  /**
   * Текст метки нужно обрезать, если он не вмещается
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
   * Ширина метки (текста)
   */
  label_size: number

  /**
   * Название слоя
   */
  name: string

  /**
   * Содержит собственное отображение (подложку/карту)
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
  plugin_data: unknown[]

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
   * Текст метки нужно переносить, если он не влезает
   */
  wrap_text: boolean
}
