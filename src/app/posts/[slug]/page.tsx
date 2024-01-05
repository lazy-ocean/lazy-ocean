import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../../api/postsApi";
import markdownToHtml from "../../../utils/markdownToHtml";
import { Post } from "../../../components/2023/interfaces";

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

  const { title } = post;

  return (
    <>
      <article>
        <Head>
          <title>{title}</title>
          <meta property="og:image" content={post.ogImage} />
        </Head>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
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
