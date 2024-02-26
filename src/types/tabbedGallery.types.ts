import { ColumnWidth } from "../components/ProjectPage/Columns.utils";

type FeatureComponentName =
    | "SingleText"
    | "SingleImage"
    | "ColumnsTextText"
    | "ColumnsTextImage"
    | "ColumnsImageImage"
    | "ColumnsImageText";

type DescriptionPosition = "top" | "bottom";

type FeatureConfigMap = {
    SingleImage: SingleImageConfig;
    SingleText: SingleTextConfig;
    ColumnsTextText: ColumnsTextTextConfig;
    ColumnsImageImage: ColumnsImageImageConfig;
    ColumnsTextImage: ColumnsTextImageConfig;
    ColumnsImageText: ColumnsTextImageConfig;
};

type FeatureContentMap = {
    SingleImage: SingleImageContent;
    SingleText: SingleTextContent;
    ColumnsTextText: ColumnsTextTextContent;
    ColumnsImageImage: ColumnsImageImageContent;
    ColumnsTextImage: ColumnsTextImageContent;
    ColumnsImageText: ColumnsTextImageContent;
};

interface ColumnsFeatureConfig {
    leftColumnWidth: ColumnWidth;
}

interface ColumnsTextImageConfig extends ColumnsFeatureConfig {
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition: DescriptionPosition;
}

interface ColumnsImageImageConfig extends ColumnsFeatureConfig {
    withLeftH1: boolean;
    withRightH1: boolean;
    withLeftDescription: boolean;
    withRightDescription: boolean;
    descriptionPosition: DescriptionPosition;
}
interface SingleImageConfig {
    withH1: boolean;
    withDescription: boolean;
}
interface SingleTextConfig {
    withH1: boolean;
}
interface ColumnsTextTextConfig extends ColumnsFeatureConfig {
    withLeftH1: boolean;
    withRightH1: boolean;
}

interface SingleTextContent {
    h1?: string;
    description: string;
}

interface ColumnsTextTextContent {
    leftH1?: string;
    rightH1?: string;
    leftDescription: string;
    rightDescription: string;
}

interface SingleImageContent {
    img: string;
    h1?: string;
    description?: string;
}

interface ColumnsImageImageContent {
    leftImg: string;
    rightImg: string;
    leftH1?: string;
    rightH1?: string;
    leftDescription?: string;
    rightDescription?: string;
}

interface ColumnsTextImageContent {
    img: string;
    h1?: string;
    description: string;
}

interface Feature<T extends FeatureComponentName> {
    component: T;
    configuration: FeatureConfigMap[T];
    content: FeatureContentMap[T];
}

type Features = { [key: `feature${number}`]: Feature<FeatureComponentName> };

interface ProjectContent {
    tabName: string;
    highlight: string;
    features: Features;
}

interface GalleryProject {
    header: string;
    intro: string;
    tabbedGalleryContent: ProjectContent[];
}

interface TabbedGalleryData {
    [key: `project${number}`]: GalleryProject;
}

export type {
    FeatureComponentName,
    Feature,
    Features,
    ProjectContent,
    GalleryProject,
    TabbedGalleryData,
    ColumnsTextImageContent,
    ColumnsImageImageContent,
    ColumnsTextTextContent,
    SingleImageContent,
    SingleTextContent,
    FeatureConfigMap,
    FeatureContentMap,
};
