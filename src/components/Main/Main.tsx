import React from "react";
import { Container, Copy, WTTLink, Sticky, Skills } from "./Main.styled";
import Cards from "../Card/Card";
import Label from "../Label/Label";
import { TechStack } from "../interfaces";

const skills = [
  {
    h: "Frontend",
    list: [
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.react,
      TechStack.Next,
    ],
  },
  {
    h: "Testing",
    list: [TechStack.Jest, TechStack.cypress],
  },
  {
    h: "Everything else",
    list: [
      TechStack.a11y,
      TechStack.styled,
      TechStack.npm,
      TechStack.gulp,
      TechStack.express,
    ],
  },
];

const Main = () => {
  return (
    <Container>
      <Copy>
        <Sticky>
          <h1>
            Hello! 👋
            <br />I am Vladlena Panchenko
          </h1>
          <p>
            I&apos;m a Frontend Engineer at{" "}
            <WTTLink
              href="https://www.wundermanthompson.com/expertise/technology"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Wunderman Thompson Technology
            </WTTLink>
            .<br />I love developing complex and accessible web-interfaces and
            always eager to try something new.
            <br />
            Siberian-born living in Gdansk, Poland.
          </p>
          <article>
            <h2>Skills</h2>
            {skills.map(({ h, list }) => (
              <Skills key={h}>
                <h3>{h}</h3>
                {list.map((item: TechStack, i: number) => (
                  <Label text={item} key={i} />
                ))}
              </Skills>
            ))}
          </article>
        </Sticky>
      </Copy>
      <Cards />
    </Container>
  );
};

export default Main;
