import { AccentColours } from "../theme";

export enum TechStack {
  Next = "Next.js",
  TypeScript = "TypeScript",
  Jest = "Jest",
  a11y = "a11y",
}

export enum Tags {
  pet = "Pet Project",
  WTT = "WTT",
  freelance = "freelance",
}

export interface Project {
  title: string;
  tag: Tags;
  date: string;
  text: string;
  stack: TechStack[];
  color: AccentColours;
  link: string;
  github?: string;
}
