import React from "react";
import { Container, Copy, Description, Sticky, Skills } from "./Main.styled";
import Cards from "../Card/Card";
import Label from "../Label/Label";
import { MainData, Project, TechStack } from "../interfaces";
import { skills } from "../../backups/skills";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => {
  console.log(items);
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
            {Object.keys(tags || skills).map((name) => (
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
      <Cards items={items} />
    </Container>
  );
};

export default Main;
