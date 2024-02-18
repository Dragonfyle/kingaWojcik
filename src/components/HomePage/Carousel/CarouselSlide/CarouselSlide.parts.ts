import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakpoints";

export const SlideWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;
    height: 97vh;
    max-height: min(100vh, 1300px);
    overflow: hidden;
    ${BREAKPOINTS.XXL} {
        max-height: 1000px;
    }
    ${BREAKPOINTS.L} {
        height: 80vh;
        max-height: 800px;
    }
    ${BREAKPOINTS.S} {
        height: 80vh;
        max-height: 640px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
