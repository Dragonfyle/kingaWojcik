import { breakpoints } from "../../../../styles/breakpoints";
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 200px;
    height: 100%;
    cursor: pointer;
    ${breakpoints.S} {
        display: none;
    }
`;
