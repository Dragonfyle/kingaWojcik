import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    /* margin-right: 50px; */
    scroll-snap-align: start;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 20px;
`;

export const ItemTitle = styled.h4`
    margin-bottom: 10px;
`;
