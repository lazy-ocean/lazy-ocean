import { SocialLink } from "../components/interfaces";
import { AiOutlineLinkedin, AiOutlineCodepen } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiCodepenLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

export const socials: SocialLink[] = [
  {
    alt: "GitHub",
    link: "https://github.com/lazy-ocean",
    icon: <VscGithubAlt aria-hidden={true} title="GitHub" />,
  },
  {
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/vladlena-panchenko/",
    icon: <SlSocialLinkedin aria-hidden={true} title="LinkedIn" />,
  },
  {
    alt: "Codepen",
    link: "https://codepen.io/lazy_ocean/pens/public",
    icon: <PiCodepenLogoLight aria-hidden={true} title="Codepen" />,
  },
];
