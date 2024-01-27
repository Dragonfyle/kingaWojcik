import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  max-height: min(100vh, 1300px);
  overflow: hidden;
  ${breakpoints.XXL} {
    max-height: 730px;
  }
  ${breakpoints.L} {
    max-height: 730px;
  }
  ${breakpoints.S} {
    max-height: 640px;
  }
`;

export const StyledP = styled.p<{ $isActive: boolean }>`
  position: absolute;
  left: 7%;
  top: 20%;
  font-size: 2.5rem;
  font-weight: 400;
  max-width: 30%;
  color: beige;
  text-align: left;
  ${breakpoints.XXL} {
    font-size: 1.5rem;
  }
  ${breakpoints.L} {
    font-size: 2rem;
  }
  ${breakpoints.S} {
    font-size: 1.5rem;
  }
`;
