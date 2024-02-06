import { breakpoints } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const MapWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 78%;
    max-width: 1300px;
    margin: 0 11%;
    margin-top: 50px;
    ${breakpoints.L} {
        margin-top: 0;
    }
    ${breakpoints.L} {
        width: 94%;
    }
`;
