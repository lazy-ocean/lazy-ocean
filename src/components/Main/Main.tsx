import React from "react";
import Cards from "../Card/Cards";
import Label from "../Label/Label";
import { MainData, Project, TechStack } from "../interfaces";
import { skills } from "../../backups/skills";
import styles from "./Main.module.css";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => (
  <main className={styles.container}>
    <section className={styles.copy}>
      <div className={styles.sticky}>
        <h1 dangerouslySetInnerHTML={{ __html: header }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <article>
          <h2>Skills</h2>
          {Object.keys(tags || skills).map((name) => (
            <ul key={name} className={styles.skills}>
              <h3>{name}</h3>
              {tags[name].map((item: TechStack, i: number) => (
                <Label text={item} key={i} />
              ))}
            </ul>
          ))}
        </article>
      </div>
    </section>
    <Cards items={items} />
  </main>
);

export default Main;
