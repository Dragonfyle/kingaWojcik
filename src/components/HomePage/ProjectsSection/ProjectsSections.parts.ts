import { BREAKPOINTS } from "../../../styles/breakpoints";
import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: 0 0 0 11%;
    padding: 100px 0;
    user-select: none;
    ${BREAKPOINTS.L} {
        width: 88%;
        margin: 0 0 0 6%;
    }
    ${BREAKPOINTS.S} {
        padding: 40px 0;
        margin: 0 0 0 5%;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 68%;
`;
