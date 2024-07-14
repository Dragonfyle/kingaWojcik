import styled from "styled-components";

export const BackgroundContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.supplementary[3]};

    p,
    h1 {
        color: ${({ theme }) => theme.colors.white[2]};
    }
`;
