import React from "react";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.head}>
      <Image src="/icon.png" alt="logo" height="40" width="40" />
      <SocialLinks />
    </header>
  );
};

export default Header;
