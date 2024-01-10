import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../../api/postsApi";
import markdownToHtml from "../../../utils/markdownToHtml";
import { Post } from "../../../components/2023/interfaces";
import { BlogPost } from "../../../components/2023/BlogPost/BlogPost";
import Label from "../../../components/2023/Label/Label";
import { Header } from "../../../components/2023/Header/Header";
import styles from "../../../components/2023/Header/Header.module.css";
import postsStyles from "../posts.module.css";

const loadPostData = async (slug: string): Promise<{ post: Post }> => {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    post: {
      ...post,
      content,
    },
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { post } = await loadPostData(params.slug);

  if (!post?.slug) {
    return;
  }

  const { title, tags, date, ogImage } = post;

  return (
    <>
      <Header>
        <>
          <a href="/">
            <h3 className={styles.subheader}>Vlada's blog</h3>
          </a>
          <a href="/posts" className={styles.backLink}>
            All posts
          </a>
        </>
      </Header>
      <article>
        <Head>
          <title>{title}</title>
          <meta property="og:image" content={ogImage} />
        </Head>
        <p className={postsStyles.date}> {new Date(date!).toDateString()}</p>
        <h1>{title}</h1>
        <section className={postsStyles.blogTags}>
          <h3>Tags:</h3>
          {tags?.split(",").map((tag) => (
            <Label key={tag} text={tag} />
          ))}
        </section>
        <BlogPost post={post} />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const { posts } = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
