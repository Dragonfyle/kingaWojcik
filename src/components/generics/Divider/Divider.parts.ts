import styled from "styled-components";
import { StyledDividerProps } from "./Divider.type";

export const StyledDiv = styled.div<StyledDividerProps>`
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width};
    background-color: ${({ $color }) => $color};
    width: ${({ $width }) => $width};
    margin-left: ${({ $mLeft }) => $mLeft}px;
    margin-right: ${({ $mRight }) => $mRight}px;
    margin-top: ${({ $mTop }) => $mTop}px;
    margin-bottom: ${({ $mBot }) => $mBot}px;
`;
