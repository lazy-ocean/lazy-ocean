import React from "react";
import Cards from "@/2023/Card/Cards";
import { Labels } from "@/2023/Label/Label";
import { MainData, Project, Year } from "@/2023/interfaces";
import styles from "./Main.module.css";
import MainInfo from "@/2023/Info/Info";
import { TimeMachineBtn } from "@/2023/TimeMachine/TimeMachineBtn";
import Github from "@/2023/SocialLinks/GithubLink";
import BlogLink from "../BlogLink/BlogLink";

interface MainProps extends MainData {
  items: Project[];
}

const Main = ({ header, description, tags, items }: MainProps) => (
  <main className={`${styles.container} flexColumn`}>
    <TimeMachineBtn current={Year.twentyThree} />
    <MainInfo header={header} description={description} />
    <BlogLink />
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
