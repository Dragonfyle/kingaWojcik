import { BREAKPOINTS } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    margin-top: 30px;
    ${BREAKPOINTS.L} {
        margin-top: 50px;
        margin-right: 35px;
    }

    ${BREAKPOINTS.S} {
        margin-top: 50px;
        margin-right: 0;
    }

    .panelAnchor {
        position: relative;
    }

    & a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.leading.secondary[1]};
    }
`;

export const ProjectPanel = styled.div`
    display: flex;
    ${BREAKPOINTS.S} {
        flex-direction: column;
        height: auto;
        margin-bottom: 70px;
    }
`;

export const ItemsWrapper = styled.div`
    display: flex;
`;
