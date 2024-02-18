import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakpoints";
import Text from "../../../generics/Text/Text";

export const DescriptionWrapper = styled.div<{ $isActive: boolean }>`
    position: absolute;
    left: 11%;
    top: 20%;
    max-width: 30%;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
`;

export const StyledP = styled(Text)`
    ${BREAKPOINTS.XXL} {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
    ${BREAKPOINTS.L} {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const StyledH2 = styled(Text)`
    margin-bottom: 80px;
`;
