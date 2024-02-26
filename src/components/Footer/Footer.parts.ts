import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
`;
