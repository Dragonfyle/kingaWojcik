import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    gap: 50px;
    margin: 0 0 50px 0;

    p {
        white-space: pre-line;
    }

    ${BREAKPOINTS.M} {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
    }

    &:last-child {
        margin: 0 0 200px 0;
    }
`;
