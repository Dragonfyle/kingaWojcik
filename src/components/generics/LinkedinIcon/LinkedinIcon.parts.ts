import styled from "styled-components";
import { StyledLinkedinIconProps } from "./LinkedinIcon.utils";

export const StyledA = styled.a<StyledLinkedinIconProps>`
    display: flex;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    cursor: pointer;
    user-select: none;
    margin: auto 0;
`;
