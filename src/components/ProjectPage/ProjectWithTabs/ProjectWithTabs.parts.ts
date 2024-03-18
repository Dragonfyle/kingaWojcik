import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 1600px;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;

    img {
        max-width: 1600px;
        padding: 0 30px;

        ${BREAKPOINTS.XXL} {
            max-width: 1200px;
        }
    }
`;
