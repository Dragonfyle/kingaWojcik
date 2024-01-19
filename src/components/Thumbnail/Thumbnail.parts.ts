import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const StyledImage = styled.img`
  width: 550px;
  ${breakpoints.S} {
    width: 90vw;
  }
`;
