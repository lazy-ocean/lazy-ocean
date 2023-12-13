import React from "react";
import Cards from "../Card/Cards";
import Label from "../Label/Label";
import { MainData, Project, TechStack, Year } from "../interfaces";
import { skills } from "../../../backups/skills";
import styles from "./Main.module.css";
import MainInfo from "../Info/Info";
import { TimeMachineBtn } from "../TimeMachine/TimeMachineBtn";
import Github from "../SocialLinks/GithubLink";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => (
  <main className={styles.container}>
    <TimeMachineBtn current={Year.twentyThree} />
    <MainInfo header={header} description={description} />
    <section>
      <h2>Skills</h2>
      <article className={styles.skillsWrapper}>
        {Object.keys(tags || skills).map((name) => (
          <ul key={name} className={styles.skills}>
            <h3>{name}</h3>
            <div>
              {tags[name].map((item: TechStack, i: number) => (
                <Label text={item} key={i} />
              ))}
            </div>
          </ul>
        ))}
      </article>
    </section>
    <div>
      <h2>Projects</h2>
      <Cards items={items} />
    </div>
    <div className={styles.footer}>
      <p>Everything else: </p>
      {<Github link="https://github.com/lazy-ocean"></Github>}
    </div>
  </main>
);

export default Main;
