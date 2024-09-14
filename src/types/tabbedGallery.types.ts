import { Feature } from "./Project.types";

interface TabbedGalleryProps {
    source: TabbedGalleryProject;
}

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
    title: string;
    intro: string;
    tabbedGalleryContent: ProjectContent[];
}

interface TabbedGalleryData {
    [key: `project${number}`]: TabbedGalleryProject;
}

export type {
    TabbedGalleryProps,
    FeatureComponentName,
    Features,
    ProjectContent,
    TabbedGalleryProject,
    TabbedGalleryData,
};
