import styled from "styled-components";
import { TechStack } from "../interfaces";

interface LabelsProps {
  text: TechStack;
}

type Map = {
  [key in TechStack]?: string;
};

const colorMap: Map = {
  [TechStack.TypeScript]: "#F1C0E8",
  [TechStack.Next]: "#d4d4d4",
  [TechStack.Jest]: "#CDE4B4",
  [TechStack.a11y]: "#ffcccc",
  [TechStack.JavaScript]: "#fae97a",
  [TechStack.npm]: "#9ECEE6",
  [TechStack.gulp]: "#FFADAD",
  [TechStack.react]: "#81B2D9",
  [TechStack.express]: "#d1b4de",
  [TechStack.cypress]: "#FFC999",
  [TechStack.styled]: "#b9e7de",
};

export const LabelWrapper = styled.li<LabelsProps>`
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ text }) => colorMap[text]};
  width: max-content;
  list-style-type: none;
  font-size: 0.8rem;
`;
