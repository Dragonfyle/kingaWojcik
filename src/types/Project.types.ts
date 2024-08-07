import { ColumnWidth } from "$components/ProjectPage/Feature.types";

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
interface FeatureVideoConfig {
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
    description: string;
    h1?: string;
}

interface FeatureTextTextContent {
    leftDescription: string;
    rightDescription: string;
    leftH1?: string;
    rightH1?: string;
}

interface FeatureImageContent {
    img: string;
    h1?: string;
    description?: string;
}
interface FeatureVideoContent {
    video: string;
    h1?: string;
    description?: string;
}

interface FeatureImageImageContent {
    leftImg: string;
    rightImg: string;
    leftH1: string;
    rightH1: string;
    leftDescription?: string;
    rightDescription?: string;
}

interface FeatureTextImageContent {
    img: string;
    description: string;
    h1?: string;
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
interface FeatureVideo {
    component: "Video";
    configuration: FeatureVideoConfig;
    content: FeatureVideoContent;
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

type Feature =
    | FeatureText
    | FeatureImage
    | FeatureVideo
    | FeatureTextText
    | FeatureImageImage
    | FeatureTextImage
    | FeatureImageText;

export type {
    FeatureTextImageContent,
    FeatureImageImageContent,
    FeatureTextTextContent,
    FeatureImageContent,
    FeatureVideoContent,
    FeatureTextContent,
    FeatureTextImageConfig,
    FeatureImageImageConfig,
    FeatureTextTextConfig,
    FeatureImageConfig,
    FeatureTextConfig,
    Feature,
};
