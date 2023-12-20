import React from "react";
import { Project } from "../interfaces";
import styles from "./Cards.module.css";
import Card from "./Card";
import Github from "../SocialLinks/GithubLink";

const Cards = ({ items }: { items: Project[] }) => (
  <div>
    <div className={styles.wrapper}>
      {items.map((card: Project, i) => (
        <Card card={card} i={i + 1} key={i} />
      ))}
    </div>
    <div className={styles.footer}>
      <p>Everything else: </p>
      <Github link="https://github.com/lazy-ocean"></Github>
    </div>
  </div>
);

export default Cards;
