import { Feature } from "../../data/TabbedGalleryData";

type ColumnWidth = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

interface ColumnsImageTextProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withDescription: boolean;
    descriptionPosition?: "top" | "bottom";
    withH1: boolean;
}

interface ColumnsImageImageProps {
    source: Feature;
    leftColumnWidth: ColumnWidth;
    withH1: boolean;
    withLeftDescription: boolean;
    withRightDescription: boolean;
    descriptionPosition?: "top" | "bottom";
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

export type { ColumnWidth, ColumnsImageImageProps, ColumnsImageTextProps };
