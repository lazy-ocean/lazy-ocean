"use client";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
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
    <Header cv={mainContent.cv} />
    <Main {...mainContent} items={items} />
    <Footer cv={mainContent.cv} />
  </>
);

export default Home;
