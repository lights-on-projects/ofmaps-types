import { UserRole } from '../../common.types'
import { PluginBookingsOfCurrentUser, Plugins } from '../../plugins'

/**
 * Данные пользователя для работы с проектом
 */
export interface ProjectUserDataType {
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
  // plugin_data: Partial<Record<`${Plugins}`, Record<string, any>>>
  plugin_data: {
    [Plugins.Bookings]: PluginBookingsOfCurrentUser
  }
}
