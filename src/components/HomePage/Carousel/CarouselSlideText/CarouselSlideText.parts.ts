import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakpoints";
import Text from "../../../generics/Text/Text";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    position: absolute;
    left: 11%;
    top: 20%;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    max-width: 45%;

    ${BREAKPOINTS.XL} {
        max-width: 85%;
        left: 3%;
        top: 10%;
    }

    ${BREAKPOINTS.M} {
        max-width: 85%;
        left: 7%;
        top: 10%;
    }
`;

export const StyledP = styled(Text)`
    ${BREAKPOINTS.XXL} {
    }
    ${BREAKPOINTS.L} {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const StyledH2 = styled(Text)`
    margin-bottom: 40px;
`;
