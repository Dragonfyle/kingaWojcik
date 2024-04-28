import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";

export const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    left: 50%;
    top: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.white[1]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.leading.secondary[1]};

    ${BREAKPOINTS.L} {
        padding: 8px 20px;
    }
`;

export const Menu = styled.menu`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
    padding-top: 100px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.leading.main.trans[1]};
    touch-action: none;

    p {
        font-size: ${({ theme }) => theme.fontSize["l"]};
        font-weight: bold;

        ${BREAKPOINTS.S} {
            font-size: ${({ theme }) => theme.fontSize["l"]};
        }
    }
`;
