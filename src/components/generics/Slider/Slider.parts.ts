import { BREAKPOINTS } from "src/styles/breakpoints";
import styled from "styled-components";

export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    column-gap: 50px;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    margin-top: 30px;
    padding-right: 300px;

    ${BREAKPOINTS.L} {
        margin-top: 50px;
    }

    ${BREAKPOINTS.S} {
        margin-top: 50px;
        padding-right: 100px;
    }

    & a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.leading.secondary[1]};
    }
`;
