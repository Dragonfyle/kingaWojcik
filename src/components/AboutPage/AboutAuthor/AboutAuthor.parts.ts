import Flexbox from "$components/generics/Flexbox";
import { BREAKPOINTS } from "$styles/breakpoints";
import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`;

export const StyledHeader = styled.header`
    display: flex;
    margin: 30px 0;
`;

export const DescriptionWrapper = styled(Flexbox)`
    p {
        ${BREAKPOINTS.XXL} {
            font-size: ${({ theme }) => theme.fontSize.ms};
        }
    }
`;
