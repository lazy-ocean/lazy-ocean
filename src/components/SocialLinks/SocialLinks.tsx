import React from "react";
import { Socials } from "./SocialLinks.styled";
import {
  AiOutlineLinkedin,
  AiOutlineCodepen,
  AiOutlineProfile,
} from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

interface SocialLink {
  alt: string;
  link: string;
  icon?: React.ReactElement;
}

const socials: SocialLink[] = [
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
    alt: "CV",
    link: "/Vladlena_Panchenko_CV.pdf",
    icon: <AiOutlineProfile aria-hidden={true} title="CV" />,
  },
  {
    alt: "Codepen",
    link: "https://codepen.io/lazy_ocean/pens/public",
    icon: <AiOutlineCodepen aria-hidden={true} title="Codepen" />,
  },
];

const SocialLinks = () => (
  <nav aria-label="Social links">
    <Socials>
      {socials.map(({ alt, link, icon }: SocialLink) => (
        <li key={alt}>
          <a href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </li>
      ))}
    </Socials>
  </nav>
);

export default SocialLinks;
