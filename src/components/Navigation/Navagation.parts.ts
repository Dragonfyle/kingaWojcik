import { BREAKPOINTS } from "../../styles/breakpoints";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    position: sticky;
    left: 50%;
    top: 0;
    z-index: 100;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.leading.white[1]};
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
    padding: 10px 0;

    ${BREAKPOINTS.XL} {
        width: 90%;
        margin: 0 5%;
    }
`;

export const Modal = styled.div`
    position: absolute;
    left: 50%;
    top: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.leading.main[2]};
    transform: translateX(-50%);
`;
