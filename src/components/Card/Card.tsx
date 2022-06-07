import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Container,
  Labels,
  CardHeader,
  Tag,
  Link,
  Wrapper,
  GithubLink,
  CardsFooter,
} from "./Card.styled";
import { AccentColours } from "../../theme";
import { TechStack, Project } from "../interfaces";
import Label from "../Label/Label";
import projects from "./projects";
import { RiGithubLine } from "react-icons/ri";

interface CardProps {
  card: Project;
  i: number;
}

const Github = ({ link }: { link: string }) => (
  <GithubLink href={link} target="_blank">
    <RiGithubLine aria-hidden={true} title="GitHub" />
    View on GitHub
  </GithubLink>
);

const Card = ({ card, i }: CardProps) => {
  const [isStuck, setStuck] = useState(false);
  const { title, tag, date, text, stack, color, link, github } = card;
  const cardRef = useRef<HTMLDivElement>(null);

  const onHover = (color: AccentColours) => {
    if (!isStuck && window?.innerWidth > 810) {
      document.body.style.backgroundColor = color;
    }
  };

  const resetBg = () => {
    document.body.style.backgroundColor = "#EDECE8";
  };

  const onScroll = useCallback(() => {
    const offsetTop = cardRef?.current?.offsetTop || 0;
    setStuck(window.scrollY + 31 * i >= offsetTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <Container
      color={color}
      onMouseEnter={() => onHover(color)}
      onMouseLeave={resetBg}
      ref={cardRef}
      isStuck={isStuck}
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
      {github && <Github link={github} />}
      <Labels>
        {stack.map((item: TechStack, i) => (
          <Label text={item} key={i} />
        ))}
      </Labels>
    </Container>
  );
};

const Cards = () => {
  return (
    <div>
      <Wrapper>
        {projects.map((card: Project, i) => (
          <Card card={card} i={i + 1} key={i} />
        ))}
      </Wrapper>
      <CardsFooter>
        <p>Everything else: </p>
        <Github link="https://github.com/lazy-ocean"></Github>
      </CardsFooter>
    </div>
  );
};
export default Cards;
