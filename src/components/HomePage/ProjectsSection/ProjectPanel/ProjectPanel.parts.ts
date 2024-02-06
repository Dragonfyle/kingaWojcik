import { breakpoints } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    padding-top: 30px;
`;

export const ProjectPanel = styled.div`
    display: flex;
    height: 400px;
    ${breakpoints.S} {
        flex-direction: column;
        height: auto;
        margin-bottom: 70px;
    }
`;

export const ItemsWrapper = styled.div`
    display: flex;
`;
