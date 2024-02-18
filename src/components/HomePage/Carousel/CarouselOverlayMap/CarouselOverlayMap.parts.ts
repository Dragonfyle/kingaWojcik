import { BREAKPOINTS } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const MapWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 78%;
    max-width: 1300px;
    margin: 0 11%;
    margin-top: 50px;
    ${BREAKPOINTS.L} {
        margin-top: 0;
    }
    ${BREAKPOINTS.L} {
        width: 94%;
    }
`;
