import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 22%;
    max-height: 200px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    opacity: 0.9;
`;
