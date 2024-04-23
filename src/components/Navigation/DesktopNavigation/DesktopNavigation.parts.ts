import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";

export const NavigationWrapper = styled.div`
    display: flex;
    position: sticky;
    left: 50%;
    top: 0;
    z-index: 100;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white[1]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.leading.secondary[1]};

    ${BREAKPOINTS.XXL} {
        justify-content: flex-start;
    }
`;

export const ListWrapper = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    height: 100%;
    width: 78%;
    margin: 0 11%;

    ${BREAKPOINTS.XL} {
        width: 90%;
        margin: 0 5%;
        gap: 20px;
    }
`;
