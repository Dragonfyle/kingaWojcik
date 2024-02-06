import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
`;

export const StyledP = styled.p`
    position: absolute;
    left: 7%;
    top: 20%;
    font-size: 2.5rem;
    font-weight: 400;
    max-width: 30%;
    color: beige;
    text-align: left;
    ${breakpoints.XXL} {
        font-size: 1.5rem;
    }
    ${breakpoints.L} {
        font-size: 2rem;
    }
    ${breakpoints.S} {
        font-size: 1.5rem;
    }
`;
