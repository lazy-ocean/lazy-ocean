import React from "react";
import { TechStack, Project, Tags } from "@/2023/interfaces";
import Label from "@/2023/Label/Label";
import styles from "./Card.module.css";
import Github from "@/2023/SocialLinks/GithubLink";

interface CardProps {
  card: Project;
  i: number;
}

const colorMap: {
  [key in Tags]?: string;
} = {
  [Tags.job]: "#FFCBAD",
  [Tags.pet]: "#96b3ff",
  [Tags.freelance]: "#A4CCA4",
  [Tags.learning]: "#FFC5C8",
};

const CardLabels = ({ stack }: { stack: TechStack[] }) => (
  <ul className={styles.labels}>
    {stack.map((item: TechStack, i) => (
      <Label text={item} key={i} />
    ))}
  </ul>
);

const CardImage = ({ image, title }: { image: string; title: string }) => (
  <div className={`${styles.cardImageWrapper} flexColumn`}>
    <img
      src={image}
      className={styles.cardImage}
      alt={`Screenshot of ${title}`}
    />
  </div>
);

const Card = ({ card, i }: CardProps) => {
  const { title, tag, date, text, stack, color, link, github, image } = card;

  return (
    <div
      className={`card ${styles.sticky} ${stack
        .join(" ")
        .replaceAll(".", "-")}`}
    >
      <div
        className={`${styles.container} ${styles.childPosition}`}
        style={{ "--main-colour": color, "--index": i } as any}
      >
        <div className={styles.cardTextWrapper}>
          <div className={styles.header}>
            <a
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <h2>{title}</h2>
            </a>
            <h3>{date}</h3>
            <span
              className={styles.tag}
              style={{ "--main-colour": colorMap[tag] } as any}
            >
              {tag}
            </span>
          </div>
          <p>{text}</p>
          {github && <Github link={github} />}
          <CardLabels stack={stack} />
        </div>
        {image && <CardImage image={image} title={title} />}
      </div>
    </div>
  );
};

export default Card;
