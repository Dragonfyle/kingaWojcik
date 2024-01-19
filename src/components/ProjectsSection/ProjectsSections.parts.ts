import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 89%;
  margin: 0 0 0 11%;
  padding: 100px 0;
  ${breakpoints.M} {
    width: 88%;
    margin: 0 0 0 4%;
  }
  ${breakpoints.S} {
    padding: 40px 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const StyledHeader = styled.header`
  display: flex;
  width: 68%;
`;

export const StyledH2 = styled.h2`
  font-size: 3rem;
`;
