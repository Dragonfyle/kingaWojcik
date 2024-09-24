declare type AnyObject = Record<string, any>;

export type HTMLTagNames = keyof HTMLElementTagNameMap;

export type WithTagVariant<T extends AnyObject> = T & {
    Tag?: "p" | "span" | "pre" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type RGBColor = `rgb(${string}, ${string}, ${string})`;

export type Transparent = `transparent`;

export type Gradient = `${string}-gradient(${string}, ${string}, ${string})`;

export type RGBAColor = `rgba(${string}, ${string}, ${string}, ${string})`;
