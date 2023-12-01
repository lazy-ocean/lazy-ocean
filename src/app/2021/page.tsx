import React from "react";
import { MainData, Project } from "../../components/2023/interfaces";
import styles from "./2021.module.css";
import { Header } from "../../components/2021/Header/Header";
import { Raleway } from "next/font/google";
import { Skills } from "../../components/2021/Skills/Skills";
import { Projects } from "../../components/2021/Projects/Projects";

const Home = ({
  mainContent,
  items,
}: {
  mainContent: MainData;
  items: Project[];
}) => (
  <body className={`${"raleway.variable"} ${styles.body}`}>
    <Header />
    <main className={styles.main}>
      <Skills />
      <Projects />
    </main>
  </body>
);

export default Home;
