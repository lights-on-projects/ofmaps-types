import { AuthToken, LayerID, Plugins } from '../common';
export interface EndpointProjectMetadataType {
    /**
     * Данные авторизации
     * @todo неизвестно для чего используется
     */
    authorization: unknown;
    /**
     * Название контроллера. Информация для бэка, на фронте не нужно
     * @deprecated
     */
    controller: string;
    /**
     * Метаданные проекта
     */
    metablock: {
        /**
         * Данные для бэка
         * @deprecated
         */
        class_version: string;
        /**
         * ID метаблока
         */
        id: number;
        /**
         * Описание метаблока
         */
        info: string;
        /**
         * Список с типами слоёв
         */
        layers: Record<LayerID, {
            /**
             * Id слоя
             */
            uid: LayerID;
            /**
             * Название типа слоя
             */
            name: string;
            /**
             * Описание типа слоя
             */
            info: null | unknown;
            /**
             * Слой может быть определен на 1-ом уровне древа слоёв
             */
            root: boolean;
            /**
             * Объект с данными иконки типа слоя
             */
            icon: {
                /**
                 * @todo
                 */
                context_name: string;
                /**
                 * @todo
                 */
                crops: unknown[];
                /**
                 * Расширение иконки
                 */
                extension: string;
                /**
                 * @todo
                 */
                hash: string;
                /**
                 * ID иконки
                 */
                image_id: string;
                /**
                 * MIME-тип
                 */
                mime: string;
                /**
                 * Безопасный MIME-тип
                 *
                 * Тоже самое что и `mime`, но вместо слэша - нижнее подчеркивание
                 */
                mime_safe: string;
                /**
                 * ID родительского метаблока
                 *
                 * Свойство возвращается с типом string. Для дальнейшей работы его нужно конвертировать
                 * в number, т.к. значение всегда является числом. Ошибка на стороне бэка.
                 */
                owner_id: string;
                /**
                 * @todo
                 */
                properties: unknown[];
                /**
                 * @todo
                 */
                sort: number;
                /**
                 * @todo
                 */
                valid: boolean;
            };
            /**
             * Список ID слоёв, в которых может содержаться слой данного типа
             */
            containers: LayerID[];
            /**
             * Список с данными плагинов
             *
             * Каждый плагин имеет свой уникальный ID, одинаковый в каждом проекте.
             * Для получения данных определенного плагина, используй enum Plugins.
             */
            plugin_data: {
                [Plugins.Bookings]: {
                    /**
                     * Данный тип можно забронировать
                     */
                    bookable: true;
                    /**
                     * Категория бронирования по умолчанию
                     */
                    default_category: string;
                    /**
                     * Стек бронирования по умолчанию
                     */
                    default_stack: string;
                };
                [Plugins.ExtendedFields]: {
                    fields: [];
                };
            };
        }>;
        /**
         * Название метаблока
         */
        name: string;
        /**
         * Список с типами точек (объектов)
         */
        nodes: unknown;
        /**
         * Список включенных плагинов
         */
        plugins: unknown;
        /**
         * Id воркспейса, которому принадлежит метаблок
         */
        workspace_id: number;
        /**
         * Название воркспейса, которому принадлежит метаблок
         */
        workspace_name: string;
    };
    /**
     * Права доступа к текущему проекту
     */
    project_access: 'admin' | 'client' | 'none';
    /**
     * Данные пользователя для работы с проектом
     */
    project_user_data: {
        /**
         * Права доступа к текущему проекту
         *
         * То же самое, что и `project_access`
         */
        role: 'admin' | 'client' | 'none';
        /**
         * Права доступа к воркспейсу
         */
        wsa: 'admin' | 'client' | 'none';
        /**
         * Настройки плагина для текущего пользователя
         *
         * Ключи объекта это ID плагинов
         */
        plugin_data: Partial<Record<`${Plugins}`, Record<string, any>>>;
    };
    /**
     * Используется для старого фронта
     * @deprecated
     */
    required: unknown;
    /**
     * Используется для старого фронта
     * @deprecated
     */
    required_libs: unknown;
    /**
     * Статус запроса
     *
     * - Вернет ok, если запрос выполнен успешно
     * - Вернет error, если запрос вернул ошибку
     * - Вернет auth, если для выполнения запроса требуется авторизация.
     *
     * У некоторых запросов,
     * например get_me, при ошибке авторизации вернется error, а не auth.
     */
    status: 'ok' | 'error' | 'auth';
    /**
     * Данные для авторизации
     */
    ws_auth: {
        /**
         * Токен для авторизации
         *
         * Если токена нет, будет иметь значение `-invalid-`
         */
        wst: AuthToken | '-invalid-';
    };
}