import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  opacity: 1;
`;

export const ProgressBarFiller = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background-color: #f1db13;
`;
