import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: space-around;
  width: inherit;
  background-color: white;
`;

export const StyledNav = styled.nav`
  display: flex;
  height: 100%;
`;

export const StyledUl = styled.ul`
  display: flex;
  height: 100%;
`;

export const styledLi = styled.li`
  display: block;
  padding: 12px 35px;
  height: 100%;
`;
