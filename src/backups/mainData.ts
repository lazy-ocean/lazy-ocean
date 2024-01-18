import { TechStack } from "@/2023/interfaces";

export const mainData = {
  cv: "/Vladlena_Panchenko_CV.pdf",
  header: "Hello! 👋<br/>I am Vladlena Panchenko",
  description: `I'm a Frontend Engineer at <a href="https://www.wundermanthompson.com/expertise/technology" target="_blank" rel="noopener nofollow noreferrer" class='wttLink'>Wunderman Thompson Technology</a><br/>I love developing complex and accessible web-interfaces and always eager to try something new.<br/>Siberian-born living in Gdansk, Poland.`,
  tags: {
    Frontend: [
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.react,
      TechStack.Next,
      TechStack.Remix,
    ],
    Testing: [TechStack.Jest, TechStack.cypress],
    "Everything else": [
      TechStack.a11y,
      TechStack.styled,
      TechStack.node,
      TechStack.gulp,
      TechStack.express,
    ],
  },
};
