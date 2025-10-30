export enum AccentColours {
  teal = "#a9bdfd",
  violet = "#d1b4de",
  orange = "#FFC999",
  blue = "#9ECEE6",
  green = "#CDE4B4",
  pink = "#FFADAD",
  yellow = "#fae97a",
  lightgreen = "#bbf2bc",
  brightPink = "#f9afd5",
  sage = "#c7eec7",
}

export enum TechStack {
  Next = "Next.js",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Jest = "Jest",
  a11y = "a11y",
  node = "Node.js",
  gulp = "Gulp",
  react = "React",
  express = "Express",
  cypress = "Cypress",
  styled = "styled-components",
  Remix = "Remix",
  cssModules = "CSS Modules",
  emotion = "emotion",
  auth = "auth",
  Supabase = "Supabase",
  ReactNative = "React Native",
}

export enum Tags {
  pet = "Pet Project",
  job = "Job",
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

export enum Roles {
  cv = "cv",
  frontendTags = "frontendTags",
  testingTags = "testingTags",
  otherTags = "otherTags",
  description = "description",
  header = "header",
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface MainData {
  cv: string;
  header: string;
  description: string;
  tags: { [key: string]: TechStack[] };
}

export interface SocialLink {
  alt: string;
  link: string;
  icon?: React.ReactElement;
}
