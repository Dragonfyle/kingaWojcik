import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 89%;
    margin: 0 0 0 11%;
    padding: 100px 100px 100px 0;
    user-select: none;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.leading.secondary[1]};
    }

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
    margin-bottom: 30px;
`;
