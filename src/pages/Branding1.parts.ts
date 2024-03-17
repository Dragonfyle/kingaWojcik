import styled from "styled-components";

export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.leading.supplementary[2]};

    p,
    h1 {
        color: ${({ theme }) => theme.colors.leading.white[2]};
    }
`;
