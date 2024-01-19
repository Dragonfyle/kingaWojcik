import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const MapWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%;
  margin: 0 auto;
  ${breakpoints.M} {
    width: 96%;
  }
`;
