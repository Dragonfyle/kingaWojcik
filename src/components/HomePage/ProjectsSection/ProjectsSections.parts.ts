import { BREAKPOINTS } from "../../../styles/breakpoints";
import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 89%;
    margin: 0 0 0 11%;
    padding: 100px 0;
    user-select: none;
    ${BREAKPOINTS.L} {
        width: 88%;
        margin: 0 0 0 12%;

        svg {
            position: absolute;
            z-index: 5;

            &:first-child {
                margin: 0;
                left: 0%;
                top: 56%;
                transform: translateX(-50%);
            }

            &:nth-child(2) {
                right: 0%;
                top: 56%;
                transform: translateX(50%);
            }
        }
    }
    ${BREAKPOINTS.S} {
        width: 90%;
        padding: 40px 0;
        margin: 0 0 0 5%;

        svg {
            width: 35px;
        }
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 68%;
`;
