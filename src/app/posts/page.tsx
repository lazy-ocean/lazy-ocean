import styles from "./posts.module.css";
import { getAllPosts } from "../../api/postsApi";
import { Bits } from "../../components/2023/Bits/Bits";
import { HeroBlogCard } from "../../components/2023/BlogCard/HeroBlogCard";
import { Header } from "../../components/2023/Header/Header";
import { Tags } from "../../components/2023/Tags/Tags";
import { BlogAccordion } from "../../components/2023/Accordion/Accordion";

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
        <BlogAccordion tags={tags} bits={<Bits />} />
        <h2 id="hero-h">Recently published</h2>
        <HeroBlogCard post={heroPost}>
          {heroPost.coverImage &&
            heroPost.coverImage
              .split(",")
              .map((img) => (
                <img key={img} src={img} alt="" role="presentation" />
              ))}
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
