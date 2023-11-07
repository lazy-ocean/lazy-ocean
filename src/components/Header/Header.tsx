import React from "react";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Header.module.css";

const Header = ({ cv }: { cv: string }) => {
  return (
    <header className={styles.head}>
      <Image src="/icon.png" alt="logo" height="40" width="40" />
      <SocialLinks cv={cv} />
    </header>
  );
};

export default Header;
