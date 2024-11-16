import { UserRole } from '../../common.types'
import { IPluginBookings, Plugins } from '../../plugins'

export interface IProjectAccess {
  /**
   * Права доступа к текущему проекту
   */
  project_access: UserRole

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
  role: UserRole

  /**
   * Права доступа к воркспейсу
   */
  wsa: UserRole

  /**
   * Настройки плагина для текущего пользователя
   *
   * Ключи объекта это ID плагинов
   */
  plugin_data: Partial<
    Record<Plugins, Record<string, any>> & {
      [Plugins.Bookings]: IPluginBookings.CurrentUser
    }
  >
}
