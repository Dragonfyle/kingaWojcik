import Text from "$components/generics/Text";
import { BREAKPOINTS } from "$styles/breakpoints";
import styled from "styled-components";

export const ListItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 6fr;
    gap: 40px;

    ${BREAKPOINTS.XXL} {
        grid-template-columns: 2.9fr 6fr;
    }
`;

export const ListItemTitle = styled(Text)`
    margin-bottom: 10px;
`;
