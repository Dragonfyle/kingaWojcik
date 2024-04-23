import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    max-width: 1600px;
    margin: 50px;
    margin-bottom: 200px;

    img {
        width: 100%;
    }

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
        gap: 50px;
    }

    ${BREAKPOINTS.L} {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
    }
`;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
