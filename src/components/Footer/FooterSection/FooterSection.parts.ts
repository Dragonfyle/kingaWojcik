import styled from "styled-components";

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    p {
        &:hover {
            color: ${({ theme }) => theme.colors.leading.main[2]};
        }
    }

    a {
        text-decoration: none;
    }
`;

export const StyledLi = styled.li`
    display: flex;
`;
