import styled from "styled-components";

export const StyledButton = styled.button<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    border: none;
    border-bottom: 5px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.leading.main[2] : "transparent")};
    height: 100%;
    padding: 10px 35px;
    cursor: pointer;

    &:hover {
        border-bottom: 5px solid
            ${({ theme, $isActive }) =>
                $isActive ? theme.colors.leading.main[2] : theme.colors.leading.white.trans[1]};
    }
`;
