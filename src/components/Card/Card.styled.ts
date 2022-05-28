import styled from "styled-components";
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
  [Tags.freelance]: "freelance",
};

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightBg};
  border: 1px solid ${({ theme }) => theme.palette.text};
  padding: ${({ theme }) => theme.spacings.s};
  width: 100%;
  position: relative;
  height: max-content;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  :after {
    content: "";
    position: absolute;
    background-color: ${({ color }) => color};
    top: 10px;
    left: -10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solid ${({ theme }) => theme.palette.text};
  }

  &:hover {
    transform: translate(-5px, 5px);
  }

  &:hover :after {
    opacity: 0;
  }
`;

export const Labels = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xs};
  padding: 0;
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
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xxs};
`;
