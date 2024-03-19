import styled from "styled-components";

export const FeatureWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 0 50px 0;

    &:last-child {
        margin: 0 0 200px 0;
    }

    & img {
        width: 100%;
        object-fit: contain;
    }
`;
