export function hasProperty<T extends object, K extends string>(obj: T, prop: K): obj is T & Record<K, unknown> {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
