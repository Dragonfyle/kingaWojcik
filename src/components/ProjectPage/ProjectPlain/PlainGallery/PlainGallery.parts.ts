import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    padding: 30px 30px;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }

    ${BREAKPOINTS.S} {
        padding: 15px 15px;
    }
`;
