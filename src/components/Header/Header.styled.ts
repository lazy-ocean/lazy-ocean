import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.s} ${theme.spacings.m}`};
`;

export const Socials = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    padding: 0 ${({ theme }) => theme.spacings.xxs};
  }
`;
