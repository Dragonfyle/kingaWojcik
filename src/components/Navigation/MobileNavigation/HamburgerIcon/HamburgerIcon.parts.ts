import styled from "styled-components";
import { StyledHamburgerIconProps } from "./HamburgerIcon.types";

export const HamburgerWrapper = styled.svg<StyledHamburgerIconProps>`
    height: ${({ $size }) => $size};
    user-select: none;
    aspect-ratio: 1.45/1;

    .background {
        fill: ${({ $bgColor }) => $bgColor};
    }

    .foreground {
        fill: ${({ $fgColor }) => $fgColor};
    }
`;
