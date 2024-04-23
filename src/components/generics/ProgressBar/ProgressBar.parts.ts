import styled from "styled-components";
import { CONFIG } from "../../../constants/config";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.leading.secondary[2]};
    border-radius: 1px;
    overflow: hidden;
    ${BREAKPOINTS.L} {
        height: 2px;
    }
`;

export const ProgressBarFiller = styled.div<{ $progress: number; $isActive: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.leading.main[1]};
    transition: transform ${({ $progress }) => ($progress > 0 ? CONFIG.CAROUSEL.TRANSITION + "ms" : "none")} linear;
    transform: translateX(${({ $isActive, $progress }) => ($isActive ? -100 + $progress : -101)}%);
`;
