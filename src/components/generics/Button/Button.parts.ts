import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const StyledButton = styled.button<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    border: none;
    border-bottom: 5px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.leading.main[2] : "transparent")};
    height: 100%;
    padding: 10px 30px;
    cursor: pointer;

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

    &:hover {
        border-bottom: 5px solid
            ${({ theme, $isActive }) => ($isActive ? theme.colors.leading.main[2] : theme.colors.white.trans[1])};
    }
`;
