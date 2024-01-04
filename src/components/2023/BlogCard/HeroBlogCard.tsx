import { Post } from "../../../interfaces";
import styles from "./BlogCard.module.css";

export const HeroBlogCard = ({ title, excerpt, color }: Post) => {
  return (
    <div className={styles.cont}>
      <div
        className={styles.container}
        style={{ "--main-colour": color } as any}
        color={color}
      >
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};
