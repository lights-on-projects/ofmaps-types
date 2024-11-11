import { HEX } from '../../common.types'

/**
 * Данные для отображения полигона на карте
 *
 * Полигон - это слой отображаемый на карте. Отображение выполняется с помощью многоугольника.
 * Он может иметь свою заливку, эффект при наведении, обводку, подсказку.
 */
export interface IPolygonView {
  /**
   * Альфа (прозрачность) заливки в значении по умолчанию.
   *
   * 0 - Полностью прозрачная
   * 100 - Непрозрачная
   */
  alpha: number

  /**
   * Цвет фона (заливки) полигона
   */
  fill: HEX

  /**
   * Альфа (прозрачность) заливки при наведении.
   *
   * 0 - Полностью прозрачная
   * 100 - Непрозрачная
   */
  hover: number

  /**
   * Координаты точек полигона в PCU.
   *
   * Последняя точка совпадает с первой. Полигон всегда замкнут.
   */
  polygon: [number, number][]

  /**
   * Цвет обводки полигона
   */
  stroke: HEX
}
