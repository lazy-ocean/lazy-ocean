import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { BlogTags, Post } from "../components/2023/interfaces";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (
  slug: string,
  fields: Array<keyof Post> = []
): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const item: Post = {};

    fields.forEach((field: keyof Post) => {
      if (field === "slug") item[field] = realSlug;
      if (field === "content") item[field] = content;
      if (typeof data[field] !== "undefined") item[field] = data[field];
    });

    return item;
  } catch (e) {
    console.log(e);
  }
};

export function getAllPosts(fields: Array<keyof Post> = []): {
  posts: Post[];
  tags: BlogTags[];
} {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1?.date! > post2?.date! ? -1 : 1));

  const tags = Array.from(
    new Set(
      posts
        .map((post) => post.tags)
        .join(",")
        .split(",")
    )
  ) as BlogTags[];
  return { posts, tags };
}
