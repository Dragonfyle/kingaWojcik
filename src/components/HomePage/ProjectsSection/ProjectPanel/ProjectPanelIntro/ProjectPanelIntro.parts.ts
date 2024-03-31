import { BREAKPOINTS } from "../../../../../styles/breakpoints";
import styled from "styled-components";
import Text from "../../../../generics/Text/Text";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    ${BREAKPOINTS.L} {
        margin-top: 30px;
    }
`;

export const StyledP = styled(Text)`
    width: 550px;
    margin-right: 50px;

    ${BREAKPOINTS.L} {
        margin-right: 0;
    }

    ${BREAKPOINTS.M} {
        font-size: 1.5rem;
    }
    ${BREAKPOINTS.S} {
        max-width: 90vw;
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
    ${BREAKPOINTS.XS} {
        font-size: 1.1rem;
    }
`;
