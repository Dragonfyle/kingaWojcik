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
        width: 95%;
        margin: 0 0 0 5%;

        svg {
            position: absolute;
            z-index: 5;

            &:first-child {
                left: -2%;
                top: 52%;
                transform: translateX(-50%);
            }

            &:nth-child(2) {
                right: 0%;
                top: 52%;
                transform: translateX(-20%);
            }
        }
    }

    ${BREAKPOINTS.M} {
        padding: 40px 0;

        svg {
            &:first-child {
                top: 54%;
            }

            &:nth-child(2) {
                top: 54%;
            }
        }
    }

    ${BREAKPOINTS.S} {
        svg {
            width: 40px;
            height: 40px;

            &:first-child {
                top: 50%;
                left: -3%;
            }

            &:nth-child(2) {
                top: 50%;
            }
        }
    }
`;

export const StyledHeader = styled.header`
    display: flex;

    p {
        ${BREAKPOINTS.M} {
            font-size: ${({ theme }) => theme.fontSize["3xl"]};
        }
    }
`;
