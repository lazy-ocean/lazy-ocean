import { SocialLink } from "../components/interfaces";
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
];
