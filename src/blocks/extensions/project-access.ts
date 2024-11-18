import { EUserRole } from '../../common.types'
import { NPluginBookings, EPlugin } from '../../plugins'

export interface IProjectAccess {
  /**
   * Права доступа к текущему проекту
   */
  project_access: EUserRole

  /**
   * Данные пользователя для работы с проектом
   */
  project_user_data: IProjectUserData
}

/**
 * Данные пользователя для работы с проектом
 */
export interface IProjectUserData {
  /**
   * Права доступа к текущему проекту
   *
   * То же самое, что и `project_access`
   */
  role: EUserRole

  /**
   * Права доступа к воркспейсу
   */
  wsa: EUserRole

  /**
   * Настройки плагина для текущего пользователя
   *
   * Ключи объекта это ID плагинов
   */
  plugin_data: Partial<
    Record<EPlugin, Record<string, any>> & {
      [EPlugin.Bookings]: NPluginBookings.CurrentUser
    }
  >
}
