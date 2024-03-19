import styled from "styled-components";
import Flexbox from "../../generics/Flexbox/Flexbox";

export const ListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const StyledFlexbox = styled(Flexbox)`
    border-bottom: 3px solid ${({ theme }) => theme.colors.leading.secondary[1]};
`;
