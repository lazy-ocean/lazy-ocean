import React from "react";
import { Head } from "./Header.styled";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = () => {
  return (
    <Head>
      <Image src="/icon.png" alt="logo" height="40" width="40" />
      <SocialLinks />
    </Head>
  );
};

export default Header;
