import { HEX, LayerID, LayerTypeID } from '../../common.types'

/**
 * Базоваые св-ва слоя
 */
export interface ILayerBasic {
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
  child_border_width: number

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
