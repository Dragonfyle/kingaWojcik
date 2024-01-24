import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-height: min(100vh, 1200px);
  overflow: hidden;
`;

export const StyledP = styled.p`
  position: absolute;
  left: 20%;
  top: 15%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  max-width: 30%;
  color: beige;
  text-align: left;
`;
