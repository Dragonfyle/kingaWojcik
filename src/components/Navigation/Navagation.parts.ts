import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  width: 100%;
  background-color: white;
  ${breakpoints.XXL} {
    justify-content: flex-start;
  }
`;

export const ListWrapper = styled.nav`
  display: flex;
  height: 100%;
  width: 78%;
  margin: 0 11%;
  ${breakpoints.XXL} {
    justify-content: flex-start;
  }
`;

export const StyledUlLeft = styled.ul`
  display: flex;
  width: 1040px;
`;

export const StyledUlRight = styled.ul`
  display: flex;
`;

export const styledLiLeft = styled.li`
  display: block;
  padding: 12px 35px 12px 0;
  height: 100%;
`;

export const styledLiRight = styled.li`
  display: flex;
  justify-content: flex-end;
  padding: 12px 0 12px 35px;
  height: 100%;
`;
