import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const MapItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 15vw;
  margin-right: 2%;
  ${breakpoints.XXL} {
    width: 16vw;
  }
  ${breakpoints.L} {
    margin: auto;
    width: 75vw;
  }
`;

export const DescriptionWrapper = styled.div`
  height: 30%;
  width: 100%;
  text-align: left;
  ${breakpoints.L} {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: white;
`;
