import styled from "styled-components";
import Flexbox from "$generics/Flexbox/Flexbox";
import { BREAKPOINTS } from "$styles/breakpoints";

export const ListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const StyledFlexbox = styled(Flexbox)`
    border-bottom: 3px solid ${({ theme }) => theme.colors.leading.secondary[1]};
`;

export const RightColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 0 5% 0 0%;

    ${BREAKPOINTS.XXL} {
        padding: 0 1% 0 0;
    }
`;
