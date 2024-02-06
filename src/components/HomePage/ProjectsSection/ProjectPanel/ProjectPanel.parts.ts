import { breakpoints } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    padding-top: 30px;
    overflow-x: auto;
    -ms-overflow-style: none;
    /* scrollbar-width: none; */
    scroll-snap-type: x mandatory;
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
