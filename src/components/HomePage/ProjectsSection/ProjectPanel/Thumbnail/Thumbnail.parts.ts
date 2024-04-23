import { BREAKPOINTS } from "$styles/breakpoints";
import { CONFIG } from "$constants/config";
import styled from "styled-components";

export const StyledImage = styled.img`
    max-width: ${CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH}px;
    ${BREAKPOINTS.S} {
        width: 90vw;
    }
`;

export const ProjectThumbnailWrapper = styled.div`
    aspect-ratio: ${CONFIG.PROJECT_PANEL.THUMBNAIL_WIDTH} / ${CONFIG.PROJECT_PANEL.THUMBNAIL_HEIGHT};
    position: relative;

    &:hover {
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 99%;
            background-color: ${({ theme }) => theme.colors.leading.main[2]};
            mix-blend-mode: color;
        }
    }
`;
