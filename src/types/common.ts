declare type AnyObject = Record<string, any>;

export type HTMLTagNames = keyof HTMLElementTagNameMap;

export type WithTagVariant<T extends AnyObject> = T & {
    tag?: HTMLTagNames;
};
