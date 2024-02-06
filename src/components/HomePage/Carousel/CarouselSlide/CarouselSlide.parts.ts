import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

export const SlideWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;
    height: 97vh;
    max-height: min(100vh, 1300px);
    overflow: hidden;
    ${breakpoints.XXL} {
        /* max-height: 730px; */
    }
    ${breakpoints.L} {
        height: 80vh;
        max-height: 800px;
    }
    ${breakpoints.S} {
        height: 80vh;
        max-height: 640px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
