import styled from "styled-components";
import ukenPattern from "$assets/icons/uken_pattern_element.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url("${ukenPattern}");
    background-color: ${({ theme }) => theme.colors.leading.secondary[1]};
    background-size: 2%;

    p,
    h1 {
        color: ${({ theme }) => theme.colors.white[3]};
    }
`;
