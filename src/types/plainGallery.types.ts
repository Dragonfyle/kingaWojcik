import { BrandingQuery, IllustrationsQuery } from "tina/__generated__/types";
import { Feature } from "./Project.types";

interface PlainGalleryProject {
    title: string;
    intro: string;
    plainGalleryContent: Feature[];
}

interface PlainGalleryData {
    [key: `project${number}`]: PlainGalleryProject;
}

interface PlainGalleryProps {
    projectData: IllustrationsQuery["illustrations"] | BrandingQuery["branding"];
}

export type { PlainGalleryProject, PlainGalleryData, PlainGalleryProps };
