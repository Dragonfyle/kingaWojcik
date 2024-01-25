import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  ${breakpoints.L} {
    margin-top: 0;
  }
  ${breakpoints.L} {
    width: 94%;
  }
`;
