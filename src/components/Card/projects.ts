import { Project, Tags, TechStack } from "../interfaces";
import { AccentColours } from "../../theme";

const projects: Project[] = [
  {
    title: "Ted Baker",
    tag: Tags.WTT,
    date: "June 2021 - current",
    text: "A composable modern eCommerce website, made on a multi-storefront Bloomreach headless CMS. Next.js-built integrated SPA.",
    stack: [
      TechStack.TypeScript,
      TechStack.Next,
      TechStack.Jest,
      TechStack.a11y,
    ],
    color: AccentColours.green,
    link: "https://www.tedbaker.com/",
  },
  {
    title: "The Pushkin State Museum - a11y playground",
    tag: Tags.pet,
    date: "March - May 2022",
    text: "An a11y playground/showcase sample website made during Accessibility Unity learning course. Tested with macOS VoiceOver, axe, w3c HTML validator, Wave, keyboard-friendly, WCAG 2.0 compliant colors, 4x 100% Lighthouse index.",
    stack: [TechStack.a11y, TechStack.TypeScript, TechStack.Next],
    color: AccentColours.violet,
    link: "https://a11y-showcase-museum.vercel.app/en",
    github: "https://github.com/lazy-ocean/a11y-showcase-museum",
  },
];

export default projects;
