import { ColumnWidth } from "../components/ProjectPage/Columns.utils";

type FeatureComponentName = "Text" | "Image" | "TextText" | "TextImage" | "ImageImage" | "ImageText";

type DescriptionPosition = "top" | "bottom";

interface FeatureConfig {
    leftColumnWidth: ColumnWidth;
}

interface FeatureTextImageConfig extends FeatureConfig {
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition: DescriptionPosition;
}

interface FeatureImageImageConfig extends FeatureConfig {
    withRightH1: boolean;
    withLeftH1: boolean;
    withLeftDescription: boolean;
    withRightDescription: boolean;
    descriptionPosition: DescriptionPosition;
}
interface FeatureImageConfig {
    withH1: boolean;
    withDescription: boolean;
}
interface FeatureTextConfig {
    withH1: boolean;
}
interface FeatureTextTextConfig extends FeatureConfig {
    withLeftH1: boolean;
    withRightH1: boolean;
}

interface FeatureTextContent {
    h1?: string;
    description: string;
}

interface FeatureTextTextContent {
    leftH1?: string;
    rightH1?: string;
    leftDescription: string;
    rightDescription: string;
}

interface FeatureImageContent {
    img: string;
    h1?: string;
    description?: string;
}

interface FeatureImageImageContent {
    leftImg: string;
    rightImg: string;
    leftH1?: string;
    rightH1?: string;
    leftDescription?: string;
    rightDescription?: string;
}

interface FeatureTextImageContent {
    img: string;
    h1?: string;
    description: string;
}

interface FeatureText {
    component: "Text";
    configuration: FeatureTextConfig;
    content: FeatureTextContent;
}
interface FeatureImage {
    component: "Image";
    configuration: FeatureImageConfig;
    content: FeatureImageContent;
}
interface FeatureTextText {
    component: "TextText";
    configuration: FeatureTextTextConfig;
    content: FeatureTextTextContent;
}
interface FeatureImageImage {
    component: "ImageImage";
    configuration: FeatureImageImageConfig;
    content: FeatureImageImageContent;
}
interface FeatureTextImage {
    component: "TextImage";
    configuration: FeatureTextImageConfig;
    content: FeatureTextImageContent;
}
interface FeatureImageText {
    component: "ImageText";
    configuration: FeatureTextImageConfig;
    content: FeatureTextImageContent;
}

type Feature = FeatureText | FeatureImage | FeatureTextText | FeatureImageImage | FeatureTextImage | FeatureImageText;

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

export type {
    FeatureComponentName,
    Features,
    ProjectContent,
    TabbedGalleryProject,
    TabbedGalleryData,
    FeatureTextImageContent,
    FeatureImageImageContent,
    FeatureTextTextContent,
    FeatureImageContent,
    FeatureTextContent,
    FeatureTextImageConfig,
    FeatureImageImageConfig,
    FeatureTextTextConfig,
    FeatureImageConfig,
    FeatureTextConfig,
    Feature,
};
