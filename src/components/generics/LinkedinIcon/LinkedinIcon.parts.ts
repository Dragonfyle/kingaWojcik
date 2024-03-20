import styled from "styled-components";
import { StyledLinkedinIconProps } from "./LinkedinIcon.utils";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const StyledA = styled.a<StyledLinkedinIconProps>`
    display: flex;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    cursor: pointer;
    user-select: none;
    margin: auto 0;

    ${BREAKPOINTS.L} {
        width: 35px;
        height: 35px;
    }
`;
