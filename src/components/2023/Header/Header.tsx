import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/icon.ico" height={60} width={60} alt="" />
    </header>
  );
};
