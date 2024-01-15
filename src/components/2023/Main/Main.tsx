import React from "react";
import Cards from "../Card/Cards";
import { Labels } from "../Label/Label";
import { MainData, Project, Year } from "../interfaces";
import styles from "./Main.module.css";
import MainInfo from "../Info/Info";
import { TimeMachineBtn } from "../TimeMachine/TimeMachineBtn";
import Github from "../SocialLinks/GithubLink";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => (
  <main className={`${styles.container} flexColumn`}>
    <TimeMachineBtn current={Year.twentyThree} />
    <MainInfo header={header} description={description} />
    <section>
      <h2>Blog</h2>
      <p>
        I run a tiny blog where I write about things I find interesting.{" "}
        <span className={styles.link}>
          <a href="/posts">Check it out!</a>
        </span>
      </p>
    </section>
    <section>
      <h2>Skills</h2>
      <article className={styles.skillsWrapper}>
        <Labels tags={tags} />
      </article>
    </section>
    <div>
      <h2 id="projects">Projects</h2>
      <Cards items={items} />
    </div>
    <div className={styles.footer}>
      <p>Everything else: </p>
      <Github link="https://github.com/lazy-ocean"></Github>
    </div>
  </main>
);

export default Main;
