import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../interfaces";

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
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const item: Post = {};

  fields.forEach((field: keyof Post) => {
    if (field === "slug") item[field] = realSlug;
    if (field === "content") item[field] = content;
    if (typeof data[field] !== "undefined") item[field] = data[field];
  });

  return item;
};

export function getAllPosts(fields: Array<keyof Post> = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1?.date! > post2?.date! ? -1 : 1));
  return posts;
}
