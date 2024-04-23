import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";

export const KingaWrapper = styled.div`
    display: flex;
    align-items: center;

    ${BREAKPOINTS.L} {
        p {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    margin: 0 25px 0 10px;
`;
