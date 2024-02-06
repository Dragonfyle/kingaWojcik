import styled from "styled-components";

export const StyledPicture = styled.picture<{ $isActive: boolean }>`
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity linear 600ms;
`;
