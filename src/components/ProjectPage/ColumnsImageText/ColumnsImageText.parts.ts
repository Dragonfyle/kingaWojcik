import styled from "styled-components";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    margin-top: 50px;

    & img {
        width: 100%;
        object-fit: contain;
    }
`;
