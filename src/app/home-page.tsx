import Main from "../components/2023/Main/Main";
import Footer from "../components/2023/Footer/Footer";
import React from "react";
import { MainData, Project } from "../components/2023/interfaces";

const Home = ({
  mainContent,
  items,
}: {
  mainContent: MainData;
  items: Project[];
}) => (
  <>
    <Main {...mainContent} items={items} />
    <Footer cv={mainContent.cv} />
  </>
);

export default Home;
