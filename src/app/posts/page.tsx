import { getAllPosts } from "../../api/postsApi";
import { HeroBlogCard } from "../../components/2023/BlogCard/HeroBlogCard";
import styles from "./posts.module.css";

export default function Index() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "color",
  ]);

  const [heroPost, ...rest] = allPosts;

  return (
    <div className={styles.postsSpace}>
      <h1>Vlada's Blog</h1>
      <h3>
        Thoughts on tech, life, content I consume and everything else I have an
        opinion on.
      </h3>
      <h2>Recently published</h2>
      <HeroBlogCard {...heroPost} />
      <div className={styles.allPosts}>
        {rest.map((post) => (
          <HeroBlogCard {...post} />
        ))}
      </div>
    </div>
  );
}
