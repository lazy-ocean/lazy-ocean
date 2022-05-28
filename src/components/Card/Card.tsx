import React from "react";
import {
  Container,
  Labels,
  CardHeader,
  Tag,
  Link,
  Wrapper,
  GithubLink,
} from "./Card.styled";
import { AccentColours } from "../../theme";
import { TechStack, Project } from "../interfaces";
import Label from "../Label/Label";
import projects from "./projects";
import Image from "next/image";

const Cards = () => {
  const onHover = (color: AccentColours) => {
    document.body.style.backgroundColor = color;
  };

  const resetBg = () => {
    document.body.style.backgroundColor = "#EDECE8";
  };

  return (
    <Wrapper>
      {projects.map(
        (
          { title, tag, date, text, stack, color, link, github }: Project,
          i
        ) => (
          <Container
            key={i}
            color={color}
            onMouseEnter={() => onHover(color)}
            onMouseLeave={resetBg}
          >
            <CardHeader>
              <Link
                href={link}
                target="_blank"
                rel="noopener nofollow noreferrer"
                color={color}
              >
                <h2>{title}</h2>
              </Link>
              <h3>{date}</h3>
            </CardHeader>
            <Tag tag={tag}>{tag}</Tag>
            <p>{text}</p>
            {github && (
              <GithubLink href={github} target="_blank">
                <Image
                  layout="intrinsic"
                  src="/github_logo.png"
                  width={"15px"}
                  height={15}
                  alt="GitHub logo"
                  aria-hidden
                />
                View on GitHub
              </GithubLink>
            )}
            <Labels>
              {stack.map((item: TechStack, i) => (
                <Label text={item} key={i} />
              ))}
            </Labels>
          </Container>
        )
      )}
    </Wrapper>
  );
};
export default Cards;
