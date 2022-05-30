import { AccentColours } from "../theme";

export enum TechStack {
  Next = "Next.js",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Jest = "Jest",
  a11y = "a11y",
  npm = "npm",
  gulp = "Gulp",
  react = "React",
  express = "Express",
  cypress = "Cypress",
}

export enum Tags {
  pet = "Pet Project",
  WTT = "WTT",
  freelance = "Freelance",
  learning = "Learning",
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
