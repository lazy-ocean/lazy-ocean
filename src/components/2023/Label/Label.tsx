"use client";
import React, { useEffect, useMemo, useState } from "react";
import { BlogTags, TechStack } from "@/2023/interfaces";
import styles from "./Label.module.css";
import { skills } from "@/backups/skills";

interface LabelsProps {
  text: TechStack | BlogTags | string;
  active?: string | null;
  setActive?: (arg: string | null) => void;
}

type Map = {
  [key in TechStack | BlogTags]?: string;
};

const colorMap: Map = {
  [TechStack.TypeScript]: "#F1C0E8",
  [BlogTags.music]: "#F1C0E8",
  [TechStack.Next]: "#d4d4d4",
  [BlogTags.frontend]: "#ffaaaa",
  [TechStack.Jest]: "#CDE4B4",
  [BlogTags.movies]: "#CDE4B4",
  [TechStack.a11y]: "#ffcccc",
  [BlogTags.finds]: "#fae97a",
  [TechStack.JavaScript]: "#fae97a",
  [TechStack.node]: "#9ECEE6",
  [TechStack.gulp]: "#FFADAD",
  [TechStack.react]: "#81B2D9",
  [TechStack.express]: "#d1b4de",
  [TechStack.cypress]: "#FFC999",
  [TechStack.styled]: "#b9e7de",
  [TechStack.Remix]: "#ffe3a1",
  [TechStack.cssModules]: "#a9bdfd",
  [BlogTags.design]: "#b6e2b9",
  [BlogTags.recommendations]: "#a9bdfd",
};

const isTechStack = (txt: string | TechStack | BlogTags): txt is TechStack =>
  colorMap[txt as TechStack | BlogTags] !== undefined;

const Label = ({ text, active, setActive }: LabelsProps) => {
  const colour = useMemo(
    () =>
      isTechStack(text)
        ? colorMap[text]
        : Object.values(colorMap)[Math.floor(Math.random() * 10) + 0],
    [text]
  );

  const handleClick = () => {
    if (active === text && setActive) {
      setActive(null);
    } else if (setActive) {
      const label = text.replace(".", "-");
      setActive(text);
      const cards = document.querySelectorAll(`.card`);
      for (let card of cards) {
        if (!card.classList.contains(label)) {
          card.classList.add("hidden");
        } else card.classList.remove("hidden");
      }

      const cards2 = document.querySelectorAll(`.${label}`);

      for (let i = 0; i < cards2.length; i++) {
        const card = cards2[i];
        (card.children[0] as HTMLElement).style.setProperty(
          "--index",
          (i + 1).toString()
        );
      }

      const h = document.getElementById("projects");
      if (h) {
        h.innerHTML = "Projects " + `[${cards2.length}]`;
      }
    }
  };

  useEffect(() => {
    if (!active) {
      const h = document.getElementById("projects");
      if (h) {
        h.innerHTML = "Projects";
      }
      const cards = document.querySelectorAll(`.card`);
      for (let card of cards) {
        card.classList.remove("hidden");
      }
    }
  }, [active]);

  return (
    <li
      className={`${styles.label} ${
        active && active !== text ? styles.inactive : ""
      }`}
      style={{ ["--color" as string]: colour }}
    >
      {!!setActive ? (
        <button onClick={handleClick}>#{text}</button>
      ) : (
        `#${text}`
      )}
    </li>
  );
};

export const Labels = ({ tags }: { tags: { [key: string]: TechStack[] } }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {Object.keys(tags || skills).map((name: string) => (
        <div key={name} className={styles.skills}>
          <h3>{name}</h3>
          <ul>
            {tags[name].map((item: TechStack, i: number) => (
              <Label
                text={item}
                key={i}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Label;
