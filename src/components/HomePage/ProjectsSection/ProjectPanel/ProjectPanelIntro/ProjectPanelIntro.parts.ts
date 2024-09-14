import { BREAKPOINTS } from "$styles/breakpoints";
import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    width: 550px;
    min-width: 550px;
    margin-right: 50px;

    ${BREAKPOINTS.XXL} {
        font-size: ${({ theme }) => theme.fontSize["l"]};
    }

    ${BREAKPOINTS.S} {
        font-size: ${({ theme }) => theme.fontSize["m"]};
        max-width: 90vw;
        margin-bottom: 30px;
    }
    ${BREAKPOINTS.XS} {
        font-size: ${({ theme }) => theme.fontSize["m"]};
    }
    ${BREAKPOINTS.L} {
        margin-top: 30px;
    }
`;

//TODO check if this is needed (due to TinaMarkdown)
// export const StyledP = styled(Text)`
//     width: 550px;
//     margin-right: 50px;

//     ${BREAKPOINTS.XXL} {
//         font-size: ${({ theme }) => theme.fontSize["l"]};
//     }

//     ${BREAKPOINTS.L} {
//         margin-right: 0;
//     }

//     ${BREAKPOINTS.S} {
//         font-size: ${({ theme }) => theme.fontSize["m"]};
//         max-width: 90vw;
//         margin-bottom: 30px;
//     }
//     ${BREAKPOINTS.XS} {
//         font-size: ${({ theme }) => theme.fontSize["m"]};
//     }
// `;
