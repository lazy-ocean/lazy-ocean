import React from "react";
import { LabelWrapper } from "./Label.styled";
import { TechStack } from "../interfaces";

interface LabelsProps {
  text: TechStack;
}

const Label = ({ text }: LabelsProps) => {
  return <LabelWrapper text={text}>{text}</LabelWrapper>;
};

export default Label;
