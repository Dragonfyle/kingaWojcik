import styled from "styled-components";
import Flexbox from "../generics/Flexbox/Flexbox";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Wrapper = styled.div`
    display: flex;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    border-top: 1px solid ${({ theme }) => theme.colors.white[1]};

    ${BREAKPOINTS.M} {
        flex-direction: column;
        height: auto;
        padding-bottom: 20px;
        padding-left: 20px;
    }
`;

export const StyledFlexbox = styled(Flexbox)`
    gap: 20px;
    flex-wrap: nowrap;
    margin-left: 11%;

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
