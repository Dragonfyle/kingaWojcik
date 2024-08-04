import Text from "$components/generics/Text";
import { BREAKPOINTS } from "$styles/breakpoints";
import styled from "styled-components";

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3px;

    p {
        &:hover {
            color: ${({ theme }) => theme.colors.leading.main[2]};
        }
    }

    a {
        text-decoration: none;
    }
`;

export const StyledLi = styled.li`
    display: flex;
`;

export const FooterSectionTitle = styled(Text)`
    ${BREAKPOINTS.XXL} {
        font-size: ${({ theme }) => theme.fontSize["l"]};
    }
`;
