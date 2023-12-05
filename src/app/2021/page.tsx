import React from "react";
import styles from "./2021.module.css";
import { Header } from "../../components/2021/Header/Header";
import { Skills } from "../../components/2021/Skills/Skills";
import { Projects } from "../../components/2021/Projects/Projects";

export default async function Page() {
  return (
    <body className={`${"raleway.variable"} ${styles.body}`}>
      <Header />
      <main className={styles.main}>
        <Skills />
        <Projects />
      </main>
    </body>
  );
}
