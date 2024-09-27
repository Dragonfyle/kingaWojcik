type ColumnWidth = 30 | 40 | 50 | 60 | 70;

const descriptionPositionMap = {
    top: -1,
    bottom: 1,
} as const;

export { descriptionPositionMap };

export type { ColumnWidth };
