import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    /* max-width: 960px; */
    /* margin: 50px; */

    ${BREAKPOINTS.XXL} {
        /* max-width: 960px; */

        img {
            /* max-width: 600px; */
        }
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    margin: 30px 0;
`;
