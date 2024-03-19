import styled from "styled-components";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    gap: 50px;
    margin: 0 0 50px 0;

    &:last-child {
        margin: 0 0 200px 0;
    }

    & img {
        width: 100%;
        object-fit: contain;
    }
`;
