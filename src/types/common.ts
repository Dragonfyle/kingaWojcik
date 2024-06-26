import { PlainGalleryProject } from "./plainGallery.types";
import { TabbedGalleryProject } from "./tabbedGallery.types";

declare type AnyObject = Record<string, any>;

export type HTMLTagNames = keyof HTMLElementTagNameMap;

export type WithTagVariant<T extends AnyObject> = T & {
    tag?: HTMLTagNames;
};

export type RGBColor = `rgb(${string}, ${string}, ${string})`;

export type Transparent = `transparent`;

export type Gradient = `${string}-gradient(${string}, ${string}, ${string})`;

export type RGBAColor = `rgba(${string}, ${string}, ${string}, ${string})`;

export type GalleryProject = TabbedGalleryProject | PlainGalleryProject;
