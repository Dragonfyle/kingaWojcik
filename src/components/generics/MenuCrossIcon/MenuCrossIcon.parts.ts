import styled from "styled-components";
import { StyledMenuCrossProps } from "./MenuCrossIcon.types";

export const StyledSvg = styled.svg<StyledMenuCrossProps>`
    height: ${({ $size }) => $size};
    cursor: pointer;
    user-select: none;
    aspect-ratio: 1.45/1;

    .background {
        fill: ${({ $bgColor }) => $bgColor};
    }

    .foreground {
        fill: ${({ $fgColor }) => $fgColor};
    }
`;
