import styled from "styled-components";

import { BREAKPOINTS } from "$styles/breakpoints";
import Flexbox from "$generics/Flexbox/Flexbox";

export const Wrapper = styled.footer`
    display: flex;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    border-top: 1px solid ${({ theme }) => theme.colors.white[1]};
    width: 100vw;
    padding-bottom: 40px;

    ${BREAKPOINTS.M} {
        flex-direction: column;
        height: auto;
        padding-left: 20px;
    }
`;

export const StyledFlexbox = styled(Flexbox)`
    gap: 20px;
    flex-wrap: nowrap;
    margin-left: 11%;
    width: 89%;

    ${BREAKPOINTS.L} {
        margin: 0 40px;
        gap: 25px;
    }

    ${BREAKPOINTS.M} {
        flex-direction: column;
        margin: 0 20px;
        gap: 20px;
    }

    ${BREAKPOINTS.S} {
        margin: 0 3px;
        gap: 15px;
    }
`;
