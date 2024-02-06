import styled from "styled-components";
import { CONFIG } from "../../../constants/config";
import { breakpoints } from "../../../styles/breakpoints";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 3px;
    background-color: #555;
    border-radius: 1px;
    overflow: hidden;
    ${breakpoints.L} {
        height: 2px;
    }
`;

export const ProgressBarFiller = styled.div<{
    $progress: number;
    $isActive: boolean;
}>`
    width: 100%;
    height: 100%;
    background-color: #f1db13;
    transition: transform ${({ $progress }) => ($progress > 0 ? CONFIG.CAROUSEL.INTERVAL + "ms" : "none")} linear;
    transform: translateX(${({ $isActive, $progress }) => ($isActive ? -100 + $progress : -101)}%);
`;
