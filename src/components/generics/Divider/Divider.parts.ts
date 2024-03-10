import styled from "styled-components";

export const StyledDiv = styled.div`
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.leading.secondary[2]};
    width: 90%;
    margin: 10px 0;
`;
