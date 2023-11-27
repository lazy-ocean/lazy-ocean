import React from "react";
import { Project } from "../interfaces";
import styles from "./Cards.module.css";
import Card from "./Card";
import Github from "../SocialLinks/GithubLink";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Cards = ({ items }: { items: Project[] }) => (
  <>
    <div className={styles.wrapper}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1050: 3 }}>
        <Masonry gutter="3rem">
          {items.map((card: Project, i) => (
            <Card card={card} i={i + 1} key={i} />
          ))}
          <div className={styles.footer}>
            <p>Everything else: </p>
            <Github link="https://github.com/lazy-ocean"></Github>
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  </>
);

export default Cards;
