import styled, { css } from "styled-components";
import { Tags } from "../interfaces";

interface TagProps {
  tag: Tags;
}

type Map = {
  [key in Tags]?: string;
};

const colorMap: Map = {
  [Tags.WTT]: "#96b3ff",
  [Tags.pet]: "#FFC5C8",
  [Tags.freelance]: "#FFCBAD",
  [Tags.learning]: "#A4CCA4",
};

const generateCardsTopPositions = () => {
  let styles = "";
  for (let i = 0; i < 8; i++) {
    styles += `
    &:nth-child(${i}) {
      top: calc(${i} * 30px);
    }
    `;
  }

  return css`
    ${styles}
  `;
};

interface ContainerProps {
  isStuck: boolean;
  color: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.palette.lightBg};
  border: 1px solid ${({ theme }) => theme.palette.text};
  padding: ${({ theme }) => theme.spacings.s};
  width: 100%;
  position: relative;
  height: max-content;
  box-shadow: -10px 10px ${({ color }) => color},
    -10px 10px 0px 1px ${({ theme }) => theme.palette.text};
  position: sticky;
  top: ${({ theme }) => theme.spacings.m};
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  ${({ isStuck, color }) =>
    !isStuck &&
    `
      &:hover {
        transform: translate(-5px, 5px);
        box-shadow: 0px 0px ${color};
      }
  `}

  ${generateCardsTopPositions()};
`;

export const Labels = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  padding: 0;
  flex-wrap: wrap;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
  flex-wrap: wrap;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    flex-wrap: nowrap;
  `}
`;

export const Tag = styled.div<TagProps>`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.8rem;
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ tag }) => colorMap[tag]};
`;

export const Link = styled.a`
  text-decoration: underline dashed ${({ color }) => color} 2.5px;
  text-underline-offset: 2px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s};
  margin-bottom: ${({ theme }) => theme.spacings.s};
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xxs};
`;

export const CardsFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xxs};
`;
