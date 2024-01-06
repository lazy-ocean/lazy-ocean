import styles from "./BlogPost.module.css";
import { Post } from "../interfaces";

export const BlogPost = ({ post }: { post: Post }) => {
  return (
    <section className={styles.post}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  );
};
