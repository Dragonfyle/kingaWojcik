import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    border-top: 1px solid ${({ theme }) => theme.colors.leading.white[1]};
`;
