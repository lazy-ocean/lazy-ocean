import React from "react";
import { Head, Socials } from "./Header.styled";
import Image from "next/image";

interface SocialLink {
  src: string;
  alt: string;
  link: string;
}

const socials: SocialLink[] = [
  {
    src: "/github_logo.png",
    alt: "GitHub",
    link: "https://github.com/lazy-ocean",
  },
  {
    src: "/linkedin_logo.png",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/vladlena-panchenko/",
  },
  {
    src: "/cv_logo.png",
    alt: "CV",
    link: "https://lazy-ocean.github.io/CV%20Vladlena%20Panchenko.pdf",
  },
  {
    src: "/codepen_logo.png",
    alt: "Codepen",
    link: "https://codepen.io/lazy_ocean/pens/public",
  },
];

const Header = () => {
  return (
    <Head>
      <Image src="/icon.png" alt="logo" height="50" width="50" layout="fixed" />
      <nav aria-label="Social links">
        <Socials>
          {socials.map(({ alt, src, link }: SocialLink) => (
            <li key={alt}>
              <a href={link}>
                <Image
                  src={src}
                  alt={alt}
                  height="35"
                  width="35"
                  layout="fixed"
                  aria-hidden={true}
                />
              </a>
            </li>
          ))}
        </Socials>
      </nav>
    </Head>
  );
};

export default Header;
