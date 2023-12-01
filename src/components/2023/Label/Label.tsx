import React from "react";
import { TechStack } from "../interfaces";
import styles from "./Label.module.css";

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
  [TechStack.node]: "#9ECEE6",
  [TechStack.gulp]: "#FFADAD",
  [TechStack.react]: "#81B2D9",
  [TechStack.express]: "#d1b4de",
  [TechStack.cypress]: "#FFC999",
  [TechStack.styled]: "#b9e7de",
  [TechStack.Remix]: "#ffe3a1",
};

const Label = ({ text }: LabelsProps) => {
  const colour =
    colorMap[text] ||
    Object.values(colorMap)[Math.floor(Math.random() * 10) + 0];

  return (
    <li className={styles.label} style={{ ["--color" as string]: colour }}>
      #{text}
    </li>
  );
};

export default Label;
