import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-rows: 1fr 9fr;
  height: 100%;
  width: 100vw;
  max-width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: flex-end;
  height: 100%;
  width: 100vw;
  max-width: 100%;
  background-color: lavender;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 70vw;
  height: 70%;
  margin-left: 200px;
  background-color: white;
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
`;
