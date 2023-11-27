import React from "react";
import Cards from "../Card/Cards";
import Label from "../Label/Label";
import { MainData, Project, TechStack } from "../interfaces";
import { skills } from "../../backups/skills";
import styles from "./Main.module.css";
import MainInfo from "../Info/Info";
import { TimeMachineBtn } from "../TimeMachine/TimeMachineBtn";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => (
  <main className={styles.container}>
    <TimeMachineBtn />
    <MainInfo header={header} description={description} />
    <section>
      <div>
        <h2>Skills</h2>
        <article className={styles.skillsWrapper}>
          {Object.keys(tags || skills).map((name) => (
            <ul key={name} className={styles.skills}>
              <h3>{name}</h3>
              <div className="testtt">
                {tags[name].map((item: TechStack, i: number) => (
                  <Label text={item} key={i} />
                ))}
              </div>
            </ul>
          ))}
        </article>
      </div>
    </section>
    <h2>Projects</h2>
    <Cards items={items} />
  </main>
);

export default Main;
