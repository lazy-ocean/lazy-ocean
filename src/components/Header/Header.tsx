import React from "react";
import { Head } from "./Header.styled";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = ({ cv }: { cv: string }) => {
  return (
    <Head>
      <Image src="/icon.png" alt="logo" height="40" width="40" />
      <SocialLinks cv={cv} />
    </Head>
  );
};

export default Header;
