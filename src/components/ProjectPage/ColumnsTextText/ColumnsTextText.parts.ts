import styled from "styled-components";

export const FeatureWrapper = styled.section<{ $leftWidth: string; $rightWidth: string }>`
    display: grid;
    grid-template-columns: ${({ $leftWidth, $rightWidth }) => `${$leftWidth} ${$rightWidth}`};
    grid-template-rows: auto;
`;
