import styled from "styled-components";
import { BREAKPOINTS } from "$styles/breakpoints";
import Text from "$generics/Text/Text";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    position: absolute;
    left: 11%;
    top: 20%;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    max-width: 45%;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    opacity: 0.9;
    padding: 20px 30px;

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
`;

export const StyledP = styled(Text)`
    ${BREAKPOINTS.L} {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const StyledH2 = styled(Text)`
    margin-bottom: 40px;

    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize["4xl"]};
    }
`;
