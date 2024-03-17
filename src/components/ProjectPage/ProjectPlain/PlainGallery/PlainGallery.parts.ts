import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakpoints";

export const GalleryWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }
`;
