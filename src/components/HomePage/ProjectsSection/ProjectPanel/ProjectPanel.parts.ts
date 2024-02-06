import { breakpoints } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    /* scroll-behavior: smooth; */
    margin-top: 30px;
    ${breakpoints.L} {
        margin-top: 50px;
    }
`;

export const ProjectPanel = styled.div`
    display: flex;
    ${breakpoints.S} {
        flex-direction: column;
        height: auto;
        margin-bottom: 70px;
    }
`;

export const ItemsWrapper = styled.div`
    display: flex;
`;
