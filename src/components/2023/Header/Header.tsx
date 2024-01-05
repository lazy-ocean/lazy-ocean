import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href={"/"} aria-label="Return to the main page">
        <Image
          src="/icon.ico"
          height={60}
          width={60}
          alt="Vladlena's Website"
          aria-hidden={true}
        />
      </a>
    </header>
  );
};
