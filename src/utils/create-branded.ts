/**
 * Брендированный тип
 */
export type Brand<T, B> = T & { __brand: B }

/**
 * Создать брендированный тип
 */
export const createBranded = <T, B>(value: T) => {
  return value as Brand<T, B>
}
