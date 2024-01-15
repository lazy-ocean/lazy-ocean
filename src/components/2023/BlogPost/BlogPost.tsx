import styles from "./BlogPost.module.css";
import { Post } from "../interfaces";

export const BlogPost = ({ post }: { post: Post }) => {
  return (
    <article
      className={styles.post}
      dangerouslySetInnerHTML={{ __html: post.content! }}
    />
  );
};
