import styled from "styled-components";

export const Copied = styled.span`
    position: absolute;
    left: 50%;
    top: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.leading.main[2]};
    transform: translateX(-50%);
`;
