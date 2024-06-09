import Link from "next/link";
import { Post } from "@/2023/interfaces";
import styles from "./BlogCard.module.css";
import Label from "@/2023/Label/Label";
import { ReactNode } from "react";

export const HeroBlogCard = ({
  post,
  children,
}: {
  post: Post;
  children?: ReactNode;
}) => {
  const { title, excerpt, color, slug, tags } = post;

  const Content = (
    <div
      className={styles.container}
      style={{ "--main-colour": color } as never}
      color={color}
    >
      <h2>{title}</h2>
      <div style={{ display: "inline-block", width: "100%" }}>
        <p>
          {excerpt} <span className={styles.pseudolink}>Read more...</span>
        </p>
        <ul className={styles.labels}>
          {tags?.split(",").map((item, i) => (
            <Label text={item} key={i} />
          ))}
        </ul>
      </div>
      {children && (
        <div className={styles.icons} aria-hidden="true">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <article className={`card ${styles.cont} ${tags?.split(",").join(" ")}`}>
      {!post.embeds ? (
        <Link href={`posts/${slug}`} passHref={true}>
          {Content}
        </Link>
      ) : (
        <a href={`posts/${slug}`}>{Content}</a>
      )}
    </article>
  );
};
