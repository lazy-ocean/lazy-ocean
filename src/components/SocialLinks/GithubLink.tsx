import styles from "./GithubLink.module.css";
import { RiGithubLine } from "react-icons/ri";

const Github = ({ link }: { link: string }) => (
  <a href={link} target="_blank" className={styles.githubLink}>
    <RiGithubLine aria-hidden={true} title="GitHub" />
    View on GitHub
  </a>
);

export default Github;
