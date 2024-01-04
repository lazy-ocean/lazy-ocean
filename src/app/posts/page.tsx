import { getAllPosts } from "../../api/postsApi";

export default function Index() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div>
      <p>{heroPost.title}</p>
      <p>{heroPost.excerpt}</p>
    </div>
  );
}
