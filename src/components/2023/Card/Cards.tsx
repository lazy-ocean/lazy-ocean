import React from "react";
import { Project } from "../interfaces";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = ({ items }: { items: Project[] }) => (
  <>
    <div className={styles.wrapper}>
      {items.map((card: Project, i) => (
        <Card card={card} i={i + 1} key={i} />
      ))}
    </div>
  </>
);

export default Cards;
