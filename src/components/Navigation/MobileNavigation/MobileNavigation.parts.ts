import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const NavigationWrapper = styled.div`
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
    background-color: ${({ theme }) => theme.colors.leading.white[1]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.leading.secondary[1]};
`;

export const Menu = styled.menu`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.leading.main.trans[1]};
    touch-action: none;

    div:last-child {
        margin-top: 70px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize["3xl"]};
        font-weight: bold;

        ${BREAKPOINTS.S} {
            font-size: ${({ theme }) => theme.fontSize["2xl"]};
        }
    }
`;
