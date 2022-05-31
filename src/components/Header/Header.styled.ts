import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.s}`};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    flex-wrap: nowrap;
    padding: ${theme.spacings.s} ${theme.spacings.m};
    gap: ${theme.spacings.m};
  `}
`;
