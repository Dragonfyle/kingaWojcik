import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const StyledButton = styled.button<{ $isActive: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    padding: 10px 30px;
    cursor: pointer;

    span {
        color: ${({ theme, $isActive }) => $isActive ? theme.colors.leading.secondary[1] : theme.colors.white[1]};
    }
    
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.leading.main[2] : theme.colors.leading.secondary[1]};
    transform: skew(-15deg);
    margin-right: 0.3px;

    ${BREAKPOINTS.S} {
        padding: 9px 11px;

        p {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }

    &:first-child::after {
        content: "";
        position: absolute;
        top: 0;
        left: -6%;
        width: 7%;
        height: 100%;
        background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.leading.main[2] : theme.colors.leading.secondary[1]};
    }

    &:hover:first-child::after {
        content: "";
        position: absolute;
        top: 0;
        left: -6%;
        width: 7%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.leading.main[2]};

        span {
            color: ${({ theme }) => theme.colors.leading.secondary[1]};
        }

    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.leading.main[2]};
        opacity: ${({ $isActive }) => $isActive ? '1' : '0.5'};

        span {
            color: ${({ theme }) => theme.colors.leading.secondary[1]};
        }
    }
`;

export const ButtonContent = styled.div`
    transform: skew(15deg);
`;
