import { Plugins, UserRole } from './common'

/**
 * Данные пользователя для работы с проектом
 */
export type ProjectUserDataType = {
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
  plugin_data: Partial<Record<`${Plugins}`, Record<string, any>>>
}
