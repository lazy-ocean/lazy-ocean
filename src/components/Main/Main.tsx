import React from "react";
import { Container, Copy, Description, Sticky, Skills } from "./Main.styled";
import Cards from "../Card/Card";
import Label from "../Label/Label";
import { MainData, TechStack } from "../interfaces";

const skills = [
  {
    h: "Frontend",
    list: [
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.react,
      TechStack.Next,
      TechStack.Remix,
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

const Main = (data: MainData) => {
  const { header, description, tags } = data;

  return (
    <Container>
      <Copy>
        <Sticky>
          <h1 dangerouslySetInnerHTML={{ __html: header }} />
          <Description
            dangerouslySetInnerHTML={{ __html: description }}
          ></Description>
          <article>
            <h2>Skills</h2>
            {Object.keys(tags).map((name) => (
              <Skills key={name}>
                <h3>{name}</h3>
                {tags[name].map((item: TechStack, i: number) => (
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
