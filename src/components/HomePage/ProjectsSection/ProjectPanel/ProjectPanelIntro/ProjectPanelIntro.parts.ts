import { breakpoints } from "../../../../../styles/breakpoints";
import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
`;

export const StyledP = styled.p`
    font-size: 1.7rem;
    width: 550px;
    margin-right: 40px;
    ${breakpoints.M} {
        font-size: 1.5rem;
    }
    ${breakpoints.S} {
        max-width: 90vw;
        font-size: 1.3rem;
        margin-bottom: 80px;
    }
    ${breakpoints.XS} {
        font-size: 1.1rem;
    }
`;
