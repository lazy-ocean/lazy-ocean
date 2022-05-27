import styled from "styled-components";

export const Container = styled.main`
  padding: ${({ theme }) => `${theme.spacings.s} ${theme.spacings.m}`};
  display: flex;
  gap: ${({ theme }) => theme.spacings.m};
`;

export const Copy = styled.div`
  font-size: 1.2rem;
  line-height: 2.2rem;
  max-width: 40%;
`;

export const WTTLink = styled.a`
  border-bottom: 2px dashed #bc98cb;
`;
