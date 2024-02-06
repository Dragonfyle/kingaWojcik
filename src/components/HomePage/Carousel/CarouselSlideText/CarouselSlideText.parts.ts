import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    position: absolute;
    left: 7%;
    top: 20%;
    max-width: 30%;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
`;

export const StyledP = styled.p`
    /* position: absolute; */
    font-size: 2.5rem;
    font-weight: 400;
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

export const StyledH2 = styled.h2`
    font-size: 3.5rem;
    color: beige;
    margin-bottom: 80px;
`;
