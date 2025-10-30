import { TechStack } from "@/2023/interfaces";

export const mainData = {
  cv: "/Vladlena_Panchenko_CV.pdf",
  header: "Hello! 👋<br/>I am Vladlena Panchenko",
  description: `I'm a Senior Frontend Engineer at <a class="wttLink" href="https://shine.co/en" target="_blank" rel="noopener nofollow noreferrer">Shine</a>.<br/>I love developing complex and accessible web-interfaces and always eager to try something new.<br/>Siberian-born living in Gdańsk, Poland.`,
  tags: {
    Frontend: [
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.react,
      TechStack.Next,
      TechStack.Remix,
      TechStack.ReactNative,
    ],
    Testing: [TechStack.Jest, TechStack.cypress],
    "Everything else": [
      TechStack.a11y,
      TechStack.styled,
      TechStack.emotion,
      TechStack.node,
      TechStack.gulp,
      TechStack.express,
      TechStack.auth,
      TechStack.Supabase,
    ],
  },
};
