import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/breakpoints";

export const SummaryWrapper = styled.header`
    padding: 30px;
    white-space: pre-line;

    ${BREAKPOINTS.XXL} {
        max-width: 1200px;
    }
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    white-space: pre-line;
`;
