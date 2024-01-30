import { getPostBySlug } from "@/api/postsApi";
import markdownToHtml from "./markdownToHtml";
import { Post } from "@/2023/interfaces";

export const loadPostData = async (slug: string): Promise<{ post: Post }> => {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "tags",
    "meta",
  ]);
  const content = await markdownToHtml(post?.content || "");

  return {
    post: {
      ...post,
      content,
    },
  };
};
