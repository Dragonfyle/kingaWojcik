import styled from "styled-components";

export const HighlightWrapper = styled.div`
    display: flex;
    padding: 30px;
    white-space: pre-line;
    margin: 0 0 50px 0;
`;

export const TextWrapper = styled.div`
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.leading.main[3]};
`;
