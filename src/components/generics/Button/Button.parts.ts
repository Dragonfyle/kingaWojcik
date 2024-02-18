import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 15px 40px;
    background-color: ${({ theme }) => theme.colors.leading.main[2]};
    margin: 30px;
    border: none;
`;
