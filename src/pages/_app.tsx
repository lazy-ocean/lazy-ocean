import "../../styles/globals.css";
import Main from "../components/Main/Main";
import { GlobalStyles, theme } from "../theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MyApp = () => (
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
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  </>
);

export default MyApp;
