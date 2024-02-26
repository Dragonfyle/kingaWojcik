import { Feature } from "../../types/tabbedGallery.types";

type ColumnWidth = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

interface SingleImageProps {
    source: Feature;
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface ColumnsImageTextProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withH1: boolean;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface ColumnsImageImageProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withH1: boolean;
    withLeftDescription: boolean;
    withRightDescription: boolean;
    descriptionPosition?: "top" | "bottom";
}

interface SingleTextProps {
    source: Feature;
    withH1: boolean;
}

interface ColumnsTextTextProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withLeftH1: boolean;
    withRightH1: boolean;
}

function getColumnsWidth(leftColumnWidth: ColumnWidth) {
    const rightColumnWidth = 100 - leftColumnWidth;

    const leftWidth = `${leftColumnWidth}fr`;
    const rightWidth = `${rightColumnWidth}fr`;

    return { leftWidth, rightWidth };
}

const descriptionPositionMap = {
    top: -1,
    bottom: 1,
} as const;

export { getColumnsWidth, descriptionPositionMap };

export type {
    ColumnWidth,
    SingleImageProps,
    ColumnsImageImageProps,
    ColumnsImageTextProps,
    SingleTextProps,
    ColumnsTextTextProps,
};
