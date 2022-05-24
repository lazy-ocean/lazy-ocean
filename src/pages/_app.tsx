import "../../styles/globals.css";
import Main from "../components/Main/Main";
import { GlobalStyles, theme } from "../theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const MyApp = () => {
  /* let testLintIsWorking = ""; */
  return (
    <>
      <Head>
        <title>Vladlena | Frontend Engineer</title>
        <meta
          name="description"
          content="Hello! 👋
I am Vladlena Panchenko and I am a frontent engineer"
        />
        <meta
          property="og:description"
          content="Hello! 👋
    I am Vladlena Panchenko and I am a frontent engineer"
        />
        <meta property="og:url" content="https://lazy-ocean.github.io/" />
        <meta property="og:title" content="Vladlena | Frontend engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Meta-photo.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
