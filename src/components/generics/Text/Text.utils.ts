import { ColorOption, DefaultTheme } from "styled-components";
import { WithTagVariant } from "$types/common";
import { BREAKPOINTS } from "$styles/breakpoints";

type TextSize = keyof DefaultTheme["fontSize"];
type BreakpointVariants = Partial<Record<keyof typeof BREAKPOINTS, TextSize>>;
type TextAlign = "justify" | "center" | "right" | "left";

type TextProps = WithTagVariant<{
    size?: TextSize;
    underline?: boolean;
    uppercase?: boolean;
    lineHeight?: number;
    bold?: boolean;
    italic?: boolean;
    color?: ColorOption;
    align?: TextAlign;
    whiteSpace?: string;
    className?: string;
    children?: React.ReactNode;
    breakpointVariant?: BreakpointVariants;
}>;

interface StyledTextProps {
    theme: DefaultTheme;
    $size: TextSize;
    $underline: boolean;
    $uppercase: boolean;
    $lineHeight: number;
    $bold: boolean;
    $italic: boolean;
    $color: ColorOption | string;
    $align: TextAlign;
    $whiteSpace: string;
}

function getTextSize({ theme, $size: size }: StyledTextProps): string {
    return theme.fontSize[size];
}

export type { TextProps, StyledTextProps, TextSize };

export { getTextSize };
