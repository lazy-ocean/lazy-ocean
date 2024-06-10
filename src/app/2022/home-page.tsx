import Main from "../../components/2022/Main/Main";
import Header from "../../components/2022/Header/Header";
import Footer from "../../components/2022/Footer/Footer";
import React from "react";
import { MainData, Project } from "../../components/2022/interfaces";
import styles from "./2022.module.css";

const Home = ({
  mainContent,
  items,
}: {
  mainContent: MainData;
  items: Project[];
}) => (
  <body className={styles.body}>
    <Header />
    <Main {...mainContent} items={items} />
    <Footer />
  </body>
);

export default Home;
