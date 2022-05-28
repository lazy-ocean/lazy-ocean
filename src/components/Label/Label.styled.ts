import styled from "styled-components";
import { TechStack } from "../interfaces";

interface LabelsProps {
  text: TechStack;
}

type Map = {
  [key in TechStack]?: string;
};

const colorMap: Map = {
  [TechStack.TypeScript]: "#bdcde0",
  [TechStack.Next]: "#d4d4d4",
  [TechStack.Jest]: "#bee9bc",
  [TechStack.a11y]: "#ffcccc",
};

export const LabelWrapper = styled.li<LabelsProps>`
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ text }) => colorMap[text]};
  width: max-content;
  list-style-type: none;
  font-size: 0.8rem;
`;
