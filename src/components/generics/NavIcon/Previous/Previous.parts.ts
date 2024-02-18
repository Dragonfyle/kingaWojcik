import styled from "styled-components";
import { StyledIconProps } from "../NavIcon.utils";

export const StyledSvg = styled.svg<StyledIconProps>`
    margin-left: 20px;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};

    .background {
        fill: ${({ $bgColor }) => $bgColor};
    }

    .foreground {
        fill: ${({ $fgColor }) => $fgColor};
    }
`;
