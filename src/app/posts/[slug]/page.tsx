import { Metadata } from "next";
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
    "meta",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    post: {
      ...post,
      content,
    },
  };
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const blog = await loadPostData(params.slug);

  const ogImage = blog.post.ogImage!.url;

  return {
    title: blog.post.title,
    description: blog.post.meta!.description,
    openGraph: {
      images: [ogImage],
      url: `https://lazy-ocean.vercel.app/posts/${params.slug}`,
    },
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { post } = await loadPostData(params.slug);

  if (!post?.slug) {
    return;
  }

  const { title, tags, date } = post;

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
