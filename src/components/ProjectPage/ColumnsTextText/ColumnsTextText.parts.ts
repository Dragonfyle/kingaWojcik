import styled from "styled-components";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
    gap: 50px;
    margin: 0 0 50px 0;
    padding: 0 30px;

    &:last-child {
        margin: 0 0 200px 0;
    }
`;
