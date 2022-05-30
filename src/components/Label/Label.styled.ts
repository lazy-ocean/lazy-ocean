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
  [TechStack.JavaScript]: "#ffe982",
  [TechStack.npm]: "#d4ffff",
  [TechStack.gulp]: "#ffbfc0",
  [TechStack.react]: "#81B2D9",
  [TechStack.express]: "#c3a7db",
  [TechStack.cypress]: "#ffd2a6",
};

export const LabelWrapper = styled.li<LabelsProps>`
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ text }) => colorMap[text]};
  width: max-content;
  list-style-type: none;
  font-size: 0.8rem;
`;
