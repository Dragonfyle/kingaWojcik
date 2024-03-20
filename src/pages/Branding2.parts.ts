import styled from "styled-components";
import ukenPattern from "/uken_pattern_element.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    background-image: url(${ukenPattern});
    background-size: 2%;

    p,
    h1 {
        color: ${({ theme }) => theme.colors.leading.white[3]};
    }
`;
