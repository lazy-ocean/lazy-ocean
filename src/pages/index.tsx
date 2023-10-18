import Main from "../components/Main/Main";
import { GlobalStyles, theme } from "../theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/ga";
import { queryDatabase, queryItemsDatabase } from "../api/queryDatabase";
import { parseItemProperties, parseMainProperties } from "../utils/parseProps";
import { MainData, Project } from "../components/interfaces";
import projects from "../backups/projects";
import { mainData } from "../backups/mainData";

const Home = ({
  mainContent,
  items,
}: {
  mainContent: MainData;
  items: Project[];
}) => {
  const router = useRouter();
  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, isProd]);

  return (
    <>
      <Head>
        <title>Vladlena | Frontend Engineer</title>
        <meta
          name="description"
          content="Hello! 👋
          I am Vladlena Panchenko and I am a frontend engineer"
        />
        <meta
          property="og:description"
          content="Hello! 👋
        I am Vladlena Panchenko and I am a frontend engineer"
        />
        <meta property="og:url" content="https://lazy-ocean.vercel.app/" />
        <meta property="og:title" content="Vladlena | Frontend engineer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lazy-ocean.vercel.app/meta-img.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header cv={mainContent.cv} />
        <Main {...mainContent} items={items} />
        <Footer cv={mainContent.cv} />
      </ThemeProvider>
    </>
  );
};

export async function getStaticProps() {
  let items: Project[] = projects;
  let mainContent: MainData = mainData;

  try {
    const db = await queryDatabase();
    mainContent = parseMainProperties(db);
  } catch (e) {
    console.log("woopsie, db out");
  }

  try {
    const itemsDb = await queryItemsDatabase();
    items = parseItemProperties(itemsDb);
  } catch (e) {
    console.log("woopsie, db out");
  }

  return {
    props: {
      mainContent,
      items: items,
    },
  };
}

export default Home;
