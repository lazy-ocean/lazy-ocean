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
  line-height: 2.2rem;
  max-width: 100%;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacings.xs};
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    max-width: 40%;
  }`}
`;

export const WTTLink = styled.a`
  border-bottom: 2.5px dashed #96b3ff;
`;
