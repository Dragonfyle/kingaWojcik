import styled from "styled-components";

export const AboutMeItemWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.leading.main[2]};

    & div {
        &:hover {
            background-color: ${({ theme }) => theme.colors.leading.secondary[1]};

            p {
                color: ${({ theme }) => theme.colors.leading.main[2]};
            }
        }
    }
`;
