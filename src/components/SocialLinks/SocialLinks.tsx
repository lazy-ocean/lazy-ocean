import React from "react";
import { Socials } from "./SocialLinks.styled";
import { AiOutlineProfile } from "react-icons/ai";
import { socials } from "../../backups/socialLinks";
import { SocialLink } from "../interfaces";

const SocialLinks = ({ cv }: { cv: string }) => {
  const resume = {
    alt: "CV",
    link: cv,
    icon: <AiOutlineProfile aria-hidden={true} title="CV" />,
  };

  return (
    <nav aria-label="Social links">
      <Socials>
        {[...socials, resume].map(({ alt, link, icon }: SocialLink) => (
          <li key={alt}>
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </Socials>
    </nav>
  );
};

export default SocialLinks;
