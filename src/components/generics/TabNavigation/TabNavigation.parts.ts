import styled from "styled-components";

export const StyledMenu = styled.menu`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    height: 50px;
    width: 100%;
    margin-bottom: 50px;
`;
