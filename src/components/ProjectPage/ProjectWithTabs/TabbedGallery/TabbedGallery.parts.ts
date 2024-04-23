import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const GalleryWrapper = styled.main`
    padding: 0 30px;

    ${BREAKPOINTS.S} {
        padding: 0 15px;
    }
`;
