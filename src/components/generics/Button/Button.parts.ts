import styled from "styled-components";

export const StyledButton = styled.button<{ $isActive: boolean }>`
    padding: 15px 40px;
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.leading.main[1] : theme.colors.leading.main[2]};
    margin: 30px;
    border: none;
    &:hover {
        background-color: ${({ $isActive, theme }) =>
            $isActive ? theme.colors.leading.main[1] : theme.colors.leading.main[3]};
    }
`;
