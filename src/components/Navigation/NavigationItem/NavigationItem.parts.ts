import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const NavigationItemWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.leading.main[2]};
    }

    ${BREAKPOINTS.XL} {
        padding: 10px 10px;
    }

    ${BREAKPOINTS.L} {
        padding: 10px 10px;
        border: 5px solid ${({ theme }) => theme.colors.white[1]};
    }

    a {
        text-decoration: none;
        width: 100%;
        height: 100%;
    }
`;
