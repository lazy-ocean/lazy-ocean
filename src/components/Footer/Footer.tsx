import React from "react";
import { Copyright, Container, Email } from "./Footer.styled";
import { AiFillHeart } from "react-icons/ai";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <Container>
      <Email href="mailto:panchenko.vladlena@gmail.com">
        panchenko.vladlena@gmail.com
      </Email>
      <Copyright>
        <p>Vladlena Panchenko</p>
        <AiFillHeart />
        <p>2022</p>
      </Copyright>
      <SocialLinks />
    </Container>
  );
};

export default Footer;
