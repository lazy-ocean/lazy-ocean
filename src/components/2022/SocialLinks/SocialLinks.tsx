import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { SocialLink } from "../interfaces";
import styles from "./SocialLinks.module.css";

import { AiOutlineLinkedin, AiOutlineCodepen } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

export const socials: SocialLink[] = [
  {
    alt: "GitHub",
    link: "https://github.com/lazy-ocean",
    icon: <RiGithubLine aria-hidden={true} title="GitHub" />,
  },
  {
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/vladlena-panchenko/",
    icon: <AiOutlineLinkedin aria-hidden={true} title="LinkedIn" />,
  },
  {
    alt: "Codepen",
    link: "https://codepen.io/lazy_ocean/pens/public",
    icon: <AiOutlineCodepen aria-hidden={true} title="Codepen" />,
  },
  {
    alt: "CV",
    link: "/Vladlena_Panchenko_CV.pdf",
    icon: <AiOutlineProfile aria-hidden={true} title="CV" />,
  },
];

const SocialLinks = () => {
  return (
    <nav aria-label="Social links">
      <ul className={styles.socials}>
        {socials.map(({ alt, link, icon }: SocialLink) => (
          <li key={alt}>
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
