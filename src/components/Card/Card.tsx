import React, { useEffect, useRef, useState, useCallback } from "react";
import { TechStack, Project, Tags, AccentColours } from "../interfaces";
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
  [Tags.job]: "#96b3ff",
  [Tags.pet]: "#FFC5C8",
  [Tags.freelance]: "#FFCBAD",
  [Tags.learning]: "#A4CCA4",
};

const Card = ({ card, i }: CardProps) => {
  const [isStuck, setStuck] = useState(false);
  const { title, tag, date, text, stack, color, link, github } = card;
  const cardRef = useRef<HTMLDivElement>(null);

  const onHover = (color: AccentColours) => {
    /*     if (!isStuck && window?.innerWidth > 810) {
      document.body.style.backgroundColor = `color-mix(in srgb, ${color} 35%, transparent)`;
    } */
    /*    document.body.style.backgroundColor = `color-mix(in srgb, ${color} 35%, transparent)`; */
  };

  const resetBg = () => {
    document.body.style.backgroundColor = "var(--palette-bg)";
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
    <div className={styles.stickk}>
      <div
        className={`${styles.container2} ${isStuck ? " isStuck" : ""} ${
          styles.childPosition
        }`}
        style={{ "--main-colour": color, "--index": i } as any}
        color={color}
        onMouseEnter={() => onHover(color)}
        onMouseLeave={resetBg}
        ref={cardRef}
      >
        <div className={styles.cardTextWrapper}>
          <div className={styles.header}>
            <a
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener nofollow noreferrer"
              style={{ "--main-colour": color } as any}
            >
              <h2>{title}</h2>
            </a>
            <h3>{date}</h3>
            <div className={styles.tag}>💼</div>
          </div>

          <p>{text}</p>
          {github && <Github link={github} />}
          <ul className={styles.labels}>
            {stack.map((item: TechStack, i) => (
              <Label text={item} key={i} />
            ))}
          </ul>
        </div>
        {/*         <div className={styles.cardImageWrapper}>
          <img src="/tedbaker.png" className={styles.cardImage} />
        </div> */}
        {/*     <ul className={styles.labels}>
        {stack.map((item: TechStack, i) => (
          <Label text={item} key={i} />
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default Card;
