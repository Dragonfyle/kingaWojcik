import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const StyledMenu = styled.menu`
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    height: 50px;
    width: 100%;
    margin-bottom: 50px;

    ${BREAKPOINTS.XXL} {
        width: 100%;
    }
`;
