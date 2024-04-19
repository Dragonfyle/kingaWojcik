import styled from "styled-components";
import { StyledIconProps } from "../NavIcon.utils";

export const StyledSvg = styled.svg<StyledIconProps>`
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
`;
