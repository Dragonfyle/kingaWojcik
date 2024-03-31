import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1600px;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;

    img {
        width: 100%;
        max-width: 1600px;
        padding: 0 30px;

        ${BREAKPOINTS.S} {
            padding: 0 15px;
        }
    }
`;
