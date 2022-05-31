import styled from "styled-components";

export const Container = styled.footer`
  justify-items: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.s}`};
  gap: ${({ theme }) => `${theme.spacings.xs}`};
  display: grid;
  grid-template-areas:
    "email"
    "social"
    "copy";

  ${({ theme }) => `
    @media only screen and ${theme.breakpoints.tablet}{
      padding: ${theme.spacings.s} ${theme.spacings.m};
      gap: ${theme.spacings.m};
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "email copy social";
    `}
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xxs};
  font-weight: 700;
  grid-area: copy;

  p {
    margin: 0;
  }

  svg {
    fill: ${({ theme }) => theme.palette.darkOrange};
  }
`;

export const Email = styled.a`
  grid-area: email;
`;
