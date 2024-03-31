import styled from "styled-components";

export const HeaderWrapper = styled.h1`
    display: flex;
    width: 100%;
    padding: 10px 10px;
    background-color: ${({ theme }) => theme.colors.supplementary[3]};
    color: ${({ theme }) => theme.colors.leading.main[2]};
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    text-transform: uppercase;
`;
