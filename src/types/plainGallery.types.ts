import { Feature } from "./Project.types";

interface PlainGalleryProject {
    header: string;
    intro: string;
    plainGalleryContent: Feature[];
}

interface PlainGalleryData {
    [key: `project${number}`]: PlainGalleryProject;
}

export type { PlainGalleryProject, PlainGalleryData };
