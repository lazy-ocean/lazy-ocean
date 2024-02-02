import Link from "next/link";
import { Post } from "@/2023/interfaces";
import styles from "./BlogCard.module.css";
import Label from "@/2023/Label/Label";

export const HeroBlogCard = ({
  post,
  children,
}: {
  post: Post;
  children?: any;
}) => {
  const { title, excerpt, color, slug, tags } = post;

  return (
    <article className={`card ${styles.cont} ${tags?.split(",").join(" ")}`}>
      <Link href={`posts/${slug}`} passHref={true}>
        <div
          className={styles.container}
          style={{ "--main-colour": color } as any}
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
      </Link>
    </article>
  );
};
