import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    height: 50px;
    width: 100%;
    margin-bottom: 50px;
    overflow-x: hidden;

    ${BREAKPOINTS.XXL} {
        width: 100%;
    }

    ${BREAKPOINTS.M} {
        height: auto;
        position: sticky;
        top: 5%;
    }
`;
