import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 550px;
    scroll-snap-align: start;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 20px;
`;

export const ItemTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    margin-bottom: 10px;
`;
