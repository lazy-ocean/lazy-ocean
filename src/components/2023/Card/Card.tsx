import React, { useRef } from "react";
import { TechStack, Project, Tags } from "../interfaces";
import Label from "../Label/Label";
import styles from "./Card.module.css";
import Github from "../SocialLinks/GithubLink";

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

const Card = ({ card, i }: CardProps) => {
  const { title, tag, date, text, stack, color, link, github, image } = card;

  const CardLabels = () => (
    <ul className={styles.labels}>
      {stack.map((item: TechStack, i) => (
        <Label text={item} key={i} />
      ))}
    </ul>
  );

  const CardImage = () => (
    <div className={styles.cardImageWrapper}>
      <img src={image} className={styles.cardImage} />
    </div>
  );

  return (
    <div className={styles.sticky}>
      <div
        className={`${styles.container} ${styles.childPosition}`}
        style={{ "--main-colour": color, "--index": i } as any}
        color={color}
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
            <div
              className={styles.tag}
              style={{ "--main-colour": colorMap[tag] } as any}
            >
              {tag}
            </div>
          </div>
          <p>{text}</p>
          {github && <Github link={github} />}
          <CardLabels />
        </div>
        {image && <CardImage />}
      </div>
    </div>
  );
};

export default Card;
