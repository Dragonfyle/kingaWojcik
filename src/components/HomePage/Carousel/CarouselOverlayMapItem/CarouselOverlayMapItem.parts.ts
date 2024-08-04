import { BREAKPOINTS } from "$styles/breakpoints";
import styled from "styled-components";

export const MapItemWrapper = styled.div<{ $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 15vw;
    margin-right: 2%;
    cursor: pointer;

    ${BREAKPOINTS.XXL} {
        width: 16vw;
    }

    ${BREAKPOINTS.L} {
        justify-content: center;
        margin: auto;
        width: 75vw;
        cursor: not-allowed;
    }

    & div p {
        color: ${({ $isActive, theme }) => ($isActive ? theme.colors.white[1] : theme.colors.leading.secondary[3])};
    }

    &:hover {
        & div p {
            color: ${({ theme }) => theme.colors.white[1]};
        }
    }
`;

export const DescriptionWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;

    ${BREAKPOINTS.XXL} {
        p {
            font-size: ${({ theme }) => theme.fontSize.ms};
        }
    }

    ${BREAKPOINTS.L} {
        display: none;
    }
`;
