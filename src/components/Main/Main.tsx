import React from "react";
import { Container, Copy, WTTLink, Sticky } from "./Main.styled";
import Cards from "../Card/Card";

const Main = () => {
  return (
    <Container>
      <Copy>
        <Sticky>
          <h1>
            Hello! 👋
            <br />I am Vladlena Panchenko
          </h1>
          <p>
            I&apos;m a Frontend Engineer at{" "}
            <WTTLink
              href="https://www.wundermanthompson.com/expertise/technology"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Wunderman Thompson Technology
            </WTTLink>
            .<br />I love developing complex and accessible web-interfaces and
            always eager to try something new.
            <br />
            Siberian-born living in Gdansk, Poland.
          </p>
        </Sticky>
      </Copy>
      <Cards />
    </Container>
  );
};

export default Main;
