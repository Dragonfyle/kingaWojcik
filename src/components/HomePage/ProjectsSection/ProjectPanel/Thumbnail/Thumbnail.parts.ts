import { BREAKPOINTS } from "../../../../../styles/breakpoints";
import { CONFIG } from "../../../../../constants/config";
import styled from "styled-components";

export const StyledImage = styled.img`
    width: ${CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH}px;
    ${BREAKPOINTS.S} {
        width: 90vw;
    }
`;
