import styled from "styled-components";
import { StyledHamburgerIconProps } from "./HamburgerIcon.types";

export const HamburgerWrapper = styled.svg<StyledHamburgerIconProps>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    user-select: none;

    .background {
        fill: ${({ $bgColor }) => $bgColor};
    }

    .foreground {
        fill: ${({ $fgColor }) => $fgColor};
    }
`;
