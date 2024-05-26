"use client";
import styles from "./BlogPost.module.css";
import { Post } from "@/2023/interfaces";

export const BlogPost = ({ post }: { post: Post }) => {
  const handleClick = (e) => {
    const target = e.target;

    if (target.tagName.toLowerCase() === "img") {
      target.classList.toggle("zoomed");
    }
  };

  return (
    <article
      onClick={handleClick}
      className={styles.post}
      dangerouslySetInnerHTML={{ __html: post.content! }}
    />
  );
};
