import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const NavigationItemWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.leading.main[2]};
    }

    ${BREAKPOINTS.L} {
        border: 5px solid ${({ theme }) => theme.colors.white[1]};
    }

    a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        padding: 10px 15px;
    }
`;
