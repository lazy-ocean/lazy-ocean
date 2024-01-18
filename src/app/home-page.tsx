import Main from "@/2023/Main/Main";
import Footer from "@/2023/Footer/Footer";
import React from "react";
import { MainData, Project } from "@/2023/interfaces";

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
