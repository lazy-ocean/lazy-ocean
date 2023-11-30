"use client";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import React from "react";
import { MainData, Project } from "../components/interfaces";

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
