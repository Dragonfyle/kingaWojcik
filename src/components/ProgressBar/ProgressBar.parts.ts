import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  opacity: 1;
`;

export const ProgressBarFiller = styled.div<{
  $progress: number;
  $isActive: boolean;
}>`
  width: ${({ $isActive, $progress }) => ($isActive ? $progress : 0)}%;
  height: 100%;
  background-color: #f1db13;
`;
