import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListadoBlogs from "~/components/listadoBlogs";

export function meta() {
  return {
    title: "GuitarLa - Nuestro Blog",
    descripcion: "GuitarLA, Blog de musica y venta de guitarras",
  };
}

export async function loader() {
  const post = await getPosts();
  return post.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return <ListadoBlogs posts={posts} />;
};

export default Blog;
