import styled from "styled-components";
import { StyledFlexboxProps } from "./Flexbox.utils";

export const Flexbox = styled.div<StyledFlexboxProps>`
    display: flex;
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
    flex-direction: ${({ $direction }) => $direction};
    column-gap: ${({ $colGap }) => $colGap};
    row-gap: ${({ $rowGap }) => $rowGap};
    flex-wrap: ${({ $wrap }) => $wrap};
    width: ${({ $width }) => $width};
    max-width: ${({ $width }) => $width};
`;
