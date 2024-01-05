"use client";
import { useEffect, useState } from "react";
import Label from "../Label/Label";
import { BlogTags } from "../interfaces";
import styles from "./Tags.module.css";

export const Tags = ({ tags }: { tags: BlogTags[] }) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const hero = document.getElementById("hero-post")?.children[1];
    if (active) {
      if (hero && Array.from(hero.classList).includes("hidden"))
        document.getElementById("hero-h")?.classList.add("hidden");
    } else {
      if (document.getElementById("hero-h")?.classList.contains("hidden"))
        document.getElementById("hero-h")?.classList.remove("hidden");
    }
  }, [active]);

  return (
    <section className={styles.container}>
      {tags?.map((item, i) => (
        <Label text={item} key={i} setActive={setActive} active={active} />
      ))}
    </section>
  );
};
