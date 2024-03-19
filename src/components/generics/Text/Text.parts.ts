import styled from "styled-components";
import { StyledTextProps, getTextSize } from "./Text.utils";

export const StyledText = styled.p<StyledTextProps>`
    font-size: ${getTextSize};
    text-transform: ${({ $uppercase }) => ($uppercase ? "uppercase" : "none")};
    text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
    text-align: ${({ $align }) => $align};
    font-weight: ${({ $bold, theme: { fontWeight } }) => ($bold ? fontWeight.bold : fontWeight.normal)};
    font-style: ${({ $italic }) => ($italic ? "italic" : "none")};
    color: ${({ $color }) => $color};
    line-height: ${({ $lineHeight }) => $lineHeight};
`;
