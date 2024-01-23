import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  height: auto;
  background-color: gray;
`;

export const StyledImg = styled.img``;

export const StyledPicture = styled.picture`
  /* position: relative; */
  /* bottom: 0; */
  /* right: 0; */
`;

export const StyledSource = styled.source`
  /* position: absolute; */
  /* bottom: 0; */
  /* right: 0; */
`;

export const StyledP = styled.p`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  /* width: 380px; */
  color: beige;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;
