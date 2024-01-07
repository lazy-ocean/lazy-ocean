import { getAllPosts } from "../../api/postsApi";
import { Bits } from "../../components/2023/Bits/Bits";
import { HeroBlogCard } from "../../components/2023/BlogCard/HeroBlogCard";
import { Header } from "../../components/2023/Header/Header";
import { Tags } from "../../components/2023/Tags/Tags";
import styles from "./posts.module.css";

export default function Index() {
  const { posts, tags } = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "color",
    "tags",
  ]);

  const [heroPost, ...rest] = posts;

  return (
    <>
      <Header />
      <div className={styles.postsSpace}>
        <h1>Vlada's Blog</h1>
        <h3>
          Thoughts on tech, life, content I consume and everything else I have
          an opinion on.
        </h3>
        <h2>Things I loved/did lately</h2>
        <Bits />
        <h2>Tags</h2>
        <Tags tags={tags} />
        <h2 id="hero-h">Recently published</h2>
        <HeroBlogCard post={heroPost}>
          <>
            <img src="stickers/headphones.png" alt="headphones sticker" />
            <img src="stickers/tech.png" alt="tech sticker" />
            <img src="stickers/learn.png" alt="learn sticker" />
          </>
        </HeroBlogCard>
        <h2>All posts</h2>
        <div className={styles.allPosts}>
          {rest.map((post) => (
            <HeroBlogCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </>
  );
}
