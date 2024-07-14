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
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.supplementary[5] : theme.colors.leading.secondary[1]};
    transform: skew(-15deg);
    margin-right: 0.3px;

    ${BREAKPOINTS.M} {
        padding: 5px 20px;
        max-width: 160px;
    }

    ${BREAKPOINTS.S} {
        padding: 5px 8px;

        p {
            font-size: ${({ theme }) => theme.fontSize.xs};
        }
    }

    &:first-child::after {
        content: "";
        position: absolute;
        top: 0;
        left: -7%;
        width: 7%;
        height: 100%;
        background-color: ${({ theme, $isActive }) =>
            $isActive ? theme.colors.supplementary[5] : theme.colors.leading.secondary[1]};
    }

    &:hover:first-child::after {
        content: "";
        position: absolute;
        top: 0;
        left: -7%;
        width: 7%;
        height: 100%;

        background-color: ${({ theme }) => theme.colors.supplementary[5]};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.supplementary[5]};
    }

    &:last-child {
        span {
            color: ${({ theme }) => theme.colors.leading.secondary[3]};
        }
    }
`;

export const ButtonContent = styled.div`
    transform: skew(15deg);
`;
