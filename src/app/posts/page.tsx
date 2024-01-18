import styles from "./posts.module.css";
import { Metadata } from "next";
import { getAllPosts } from "@/api/postsApi";
import { Bits } from "@/2023/Bits/Bits";
import { HeroBlogCard } from "@/2023/BlogCard/HeroBlogCard";
import { Header } from "@/2023/Header/Header";
import { BlogAccordion } from "@/2023/Accordion/Accordion";

export const metadata: Metadata = {
  metadataBase: new URL("https://lazy-ocean.vercel.app/posts"),
  title: "Vlada's blog",
  description: "Vlada's blog about all things interesting",
  icons: "icon.ico",
  openGraph: {
    description: "Vlada's blog about all things interesting",
    url: "https://lazy-ocean.vercel.app/posts",
    title: "Vlada's blog",
    type: "website",
    images: "https://lazy-ocean.vercel.app/meta-img.png",
  },
};

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
      <h1>Vlada's Blog</h1>
      <h3>
        Thoughts on tech, life, content I consume and everything else I have an
        opinion on.
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
    </>
  );
}
