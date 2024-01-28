import { breakpoints } from "../../styles/breakpoints";
import styled from "styled-components";

export const MapItemWrapper = styled.div<{ $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 15vw;
    margin-right: 2%;
    cursor: pointer;
    ${breakpoints.XXL} {
        width: 16vw;
    }
    ${breakpoints.L} {
        justify-content: center;
        margin: auto;
        width: 75vw;
        cursor: not-allowed;
    }
    & div p {
        color: ${({ $isActive }) => ($isActive ? "white" : "gray")};
    }
    &:hover {
        & div p {
            color: white;
        }
    }
`;

export const DescriptionWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    ${breakpoints.L} {
        display: none;
    }
`;

// export const Description = styled.p`
//     font-size: 1rem;
//     color: grey;
// `;
