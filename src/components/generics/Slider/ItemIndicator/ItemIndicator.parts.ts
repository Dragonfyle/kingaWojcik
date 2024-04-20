import styled from "styled-components";
import { StyledItemIndicatorProps } from "./ItemIndicator.types";

export const Dot = styled.div<StyledItemIndicatorProps>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.leading.main[1] : theme.colors.leading.secondary[2]};
`;
