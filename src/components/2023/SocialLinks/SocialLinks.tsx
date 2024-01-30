import React from "react";
import { socials } from "@/backups/socialLinks";
import { SocialLink } from "@/2023/interfaces";
import styles from "./SocialLinks.module.css";
import { CiFileOn } from "react-icons/ci";

const SocialLinks = ({ cv }: { cv: string }) => {
  const resume = {
    alt: "CV",
    link: cv,
    icon: <CiFileOn aria-hidden={true} title="CV" />,
  };

  return (
    <nav aria-label="Social links">
      <ul className={styles.socials}>
        {[...socials, resume].map(({ alt, link, icon }: SocialLink) => (
          <li key={alt}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${alt} link`}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
