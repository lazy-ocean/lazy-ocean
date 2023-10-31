"use client";
import Main from "../components/Main/Main";
import { GlobalStyles, theme } from "../theme";
import { ThemeProvider } from "styled-components";
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
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header cv={mainContent.cv} />
        <Main {...mainContent} items={items} />
        <Footer cv={mainContent.cv} />
      </ThemeProvider>
    </>
  );
};

export default Home;
