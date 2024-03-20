import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    gap: 50px;
    margin: 0 0 50px 0;

    ${BREAKPOINTS.M} {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
    }

    &:last-child {
        margin: 0 0 200px 0;
    }

    & img {
        width: 100%;
        object-fit: contain;
    }
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
`;
