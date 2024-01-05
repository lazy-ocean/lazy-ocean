import Link from "next/link";
import { Post } from "../../../interfaces";
import styles from "./BlogCard.module.css";
import Label from "../Label/Label";
import { ReactComponentElement } from "react";

export const HeroBlogCard = ({
  post,
  children,
}: {
  post: Post;
  children?: any;
}) => {
  const { title, excerpt, color, slug, tags } = post;

  return (
    <Link href={`posts/${slug}`} passHref={true}>
      <div className={styles.cont}>
        <div
          className={styles.container}
          style={{ "--main-colour": color } as any}
          color={color}
        >
          <h2>{title}</h2>
          <div style={{ display: "inline-block" }}>
            <p>
              {excerpt} <span className={styles.pseudolink}>Read more..</span>.
            </p>
            <ul className={styles.labels}>
              {tags?.split(",").map((item, i) => (
                <Label text={item} key={i} />
              ))}
            </ul>
          </div>
          {children && <div className={styles.icons}>{children}</div>}
        </div>
      </div>
    </Link>
  );
};
