import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1600px;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }
`;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
