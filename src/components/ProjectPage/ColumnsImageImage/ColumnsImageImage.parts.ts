import styled from "styled-components";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    gap: 30px;

    & img {
        width: 100%;
        object-fit: contain;
    }
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
`;
