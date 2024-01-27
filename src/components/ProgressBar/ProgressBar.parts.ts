import styled from "styled-components";
import { CONFIG } from "../../constants/config";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #555;
  overflow: hidden;
`;

export const ProgressBarFiller = styled.div<{
  $progress: number;
  $isActive: boolean;
}>`
  width: 100%;
  height: 100%;
  background-color: #f1db13;
  transition: transform
    ${({ $progress }) =>
      $progress > 0 ? CONFIG.CAROUSEL.INTERVAL + "ms" : "none"}
    linear;
  transform: translateX(
    ${({ $isActive, $progress }) => ($isActive ? -100 + $progress : -101)}%
  );
`;
