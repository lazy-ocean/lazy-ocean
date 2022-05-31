import styled from "styled-components";

export const Container = styled.main`
  padding: ${({ theme }) => `${theme.spacings.xxs} ${theme.spacings.s}`};
  display: flex;
  gap: ${({ theme }) => theme.spacings.s};
  flex-wrap: wrap;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    flex-wrap: nowrap;
    padding: ${theme.spacings.s} ${theme.spacings.m};
    gap: ${theme.spacings.m};
  `}
`;

export const Copy = styled.div`
  font-size: 1.2rem;
  max-width: 100%;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacings.xs};
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    line-height: 2.2rem;
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    max-width: 40%;
  }`}
`;

export const WTTLink = styled.a`
  border-bottom: 2.5px dashed ${({ theme }) => theme.palette.darkOrange};
`;

export const Sticky = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spacings.m};
`;

export const Skills = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
`;
