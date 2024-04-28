import styled from "styled-components";

import { StyledIconProps } from "../NavIcon.types";

export const StyledSvg = styled.svg<StyledIconProps>`
    position: relative;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    cursor: pointer;
    user-select: none;
    aspect-ratio: 1/1;

    .background {
        fill: ${({ $bgColor }) => $bgColor};
    }

    .foreground {
        fill: ${({ $fgColor }) => $fgColor};
    }

    &:hover {
        .background {
            fill: ${({ theme }) => theme.colors.leading.main[2]};
        }

        .foreground {
            fill: ${({ theme }) => theme.colors.leading.secondary[1]};
        }

        border: 4px solid ${({ theme }) => theme.colors.leading.secondary[1]};
    }

    &:hover {
        & + div span {
            visibility: visible;
        }
    }
`;

export const TooltipWrapper = styled.div`
    position: absolute;
    left: 0;
    top: -100%;
`;

export const Tooltip = styled.span`
    display: block;
    padding: 5px 10px;
    white-space: nowrap;
    background-color: gray;
    visibility: hidden;
`;
