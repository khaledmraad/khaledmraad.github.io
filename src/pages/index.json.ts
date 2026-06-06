import { getCollection } from "astro:content";
import { routeSlugFromId, sortPostsByDate } from "../lib/posts";

export async function GET() {
  const blogPosts = await getCollection("blogPosts");
  const projectPosts = await getCollection("projectPosts");

  console.log("blogPosts", blogPosts);
  console.log("projectPosts", projectPosts);

  const posts = sortPostsByDate([
    ...blogPosts.map((post) => ({ ...post, section: "blog_posts" as const })),
    ...projectPosts.map((post) => ({ ...post, section: "project_posts" as const })),
  ]);

  const body = posts.map((post) => ({
    title: post.data.title,
    permalink: `/${post.section}/${routeSlugFromId(post.id)}/`,
    content: post.body,
    summary: post.body.slice(0, 300),
  }));

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
