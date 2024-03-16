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
    height: 100%;
    width: 78%;
    margin: 0 11%;
`;

export const styledLiLeft = styled.li`
    display: block;
    padding: 12px 35px 12px 0;
    height: 100%;
`;

export const styledLiRight = styled.li`
    display: flex;
    justify-content: flex-end;
    padding: 12px 15px 12px 20px;
    height: 100%;
`;

export const StyledDialog = styled.div`
    position: absolute;
    left: 50%;
    top: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    /* border: 1px solid black; */
    background-color: ${({ theme }) => theme.colors.leading.main[2]};
    transform: translateX(-50%);
`;
