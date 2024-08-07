import styled from "styled-components";

export const HighlightWrapper = styled.div`
    display: flex;
    padding: 30px 0;
    margin: 0 0 50px 0;
`;

export const TextWrapper = styled.div`
    padding: 20px 40px;
    background-color: ${({ theme }) => theme.colors.supplementary[5]};

    h4 {
        white-space: pre-line;
    }
`;
