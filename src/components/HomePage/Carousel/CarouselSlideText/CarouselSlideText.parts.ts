import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";
import Text from "$generics/Text/Text";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    position: absolute;
    left: 11%;
    top: 20%;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    max-width: 45%;
    opacity: 0.7;
    padding: 20px 30px;
    background-color: black;

    ${BREAKPOINTS.XL} {
        max-width: 65%;
        left: 6%;
        top: 15%;
    }

    ${BREAKPOINTS.L} {
        max-width: 85%;
        left: 7%;
        top: 11%;
    }

    ${BREAKPOINTS.M} {
        max-width: 85%;
        left: 7%;
        top: 10%;
    }

    p {
        letter-spacing: 1px;
    }
`;

export const Title = styled(Text)`
    margin: 10px 0 40px;

    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
`;

export const SubText = styled(Text)`
    margin: 10px 0 40px;

    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize["m"]};
    }
`;
