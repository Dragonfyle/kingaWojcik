import { ColorOption } from "styled-components";

interface DividerProps {
    height?: number;
    width?: string;
    mLeft?: number;
    mRight?: number;
    mTop?: number;
    mBot?: number;
    color?: ColorOption;
}

interface StyledDividerProps {
    $height: number;
    $width: string;
    $mLeft: number;
    $mRight: number;
    $mTop: number;
    $mBot: number;
    $color: ColorOption;
}

export type { DividerProps, StyledDividerProps };
