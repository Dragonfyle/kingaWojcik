import { Feature } from "$types/Project.types";

type ColumnWidth = 30 | 40 | 50 | 60 | 70;

interface FeatureImageProps {
    source: Feature;
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}
interface FeatureVideoProps {
    source: Feature;
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface FeatureImageTextProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface FeatureImageImageProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withLeftH1: boolean;
    withRightH1: boolean;
    withLeftDescription: boolean;
    withRightDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface FeatureTextProps {
    source: Feature;
    withH1: boolean;
}

interface FeatureTextTextProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withLeftH1: boolean;
    withRightH1: boolean;
}

const descriptionPositionMap = {
    top: -1,
    bottom: 1,
} as const;

export { descriptionPositionMap };

export type {
    ColumnWidth,
    FeatureImageProps,
    FeatureVideoProps,
    FeatureImageImageProps,
    FeatureImageTextProps,
    FeatureTextProps,
    FeatureTextTextProps,
};
