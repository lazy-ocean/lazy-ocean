import React from "react";
import { AiFillHeart } from "react-icons/ai";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

const Footer = ({ cv }: { cv: string }) => {
  return (
    <footer className={styles.container}>
      <a href="mailto:panchenko.vladlena@gmail.com" className={styles.email}>
        panchenko.vladlena@gmail.com
      </a>
      <div className={styles.copyright}>
        <p>Vladlena Panchenko</p>
        <AiFillHeart />
        <p>{new Date().getFullYear()}</p>
      </div>
      <SocialLinks cv={cv} />
    </footer>
  );
};

export default Footer;
