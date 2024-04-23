import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";

import { StyledNavigationEmailProps } from "./NavigationEmail.types";

export const EmailWrapper = styled.div<StyledNavigationEmailProps>`
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
