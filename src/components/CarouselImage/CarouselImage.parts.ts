import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 100%;
  max-height: 100%;
`;

export const StyledPicture = styled.picture<{ $isActive: boolean }>`
  order: ${({ $isActive }) => ($isActive ? 0 : 1)};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity linear 300ms;
`;
