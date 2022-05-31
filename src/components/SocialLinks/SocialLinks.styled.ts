import styled from "styled-components";

export const Socials = styled.ul`
  display: flex;
  list-style-type: none;
  grid-area: social;
  padding: 0;
  margin: 0;

  li {
    padding: 0 ${({ theme }) => theme.spacings.xxs};
  }

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.palette.text};
    transition: fill 0.4s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.palette.darkOrange};
    }
  }
`;
