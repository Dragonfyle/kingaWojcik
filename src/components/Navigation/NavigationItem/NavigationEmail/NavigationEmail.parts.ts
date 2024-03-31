import styled from "styled-components";
import { StyledNavigationItemProps } from "../NavigationItem.types";
import { BREAKPOINTS } from "../../../../styles/breakpoints";

export const EmailWrapper = styled.div<StyledNavigationItemProps>`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};

    ${BREAKPOINTS.XL} {
        padding: 10px 10px;
    }
`;
