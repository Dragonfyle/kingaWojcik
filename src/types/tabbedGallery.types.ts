import { Feature } from "./Project.types";

type FeatureComponentName = "Text" | "Image" | "TextText" | "TextImage" | "ImageImage" | "ImageText";

type Features = {
    [key: `feature${number}`]: Feature;
};

interface ProjectContent {
    tabName: string;
    highlight: string;
    features: Features;
}

interface TabbedGalleryProject {
    header: string;
    intro: string;
    tabbedGalleryContent: ProjectContent[];
}

interface TabbedGalleryData {
    [key: `project${number}`]: TabbedGalleryProject;
}

export type { FeatureComponentName, Features, ProjectContent, TabbedGalleryProject, TabbedGalleryData };
