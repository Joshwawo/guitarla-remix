import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listadoGuitarras";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesBlogs from "~/styles/blog.css";
import ListadoBlogs from "~/components/listadoBlogs";
import styleCurso from "~/styles/curso.css";
import Curso from "~/components/curso";

export function meta() {}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesBlogs,
    },
    {
      rel: "stylesheet",
      href: styleCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoBlogs posts={posts} />
      </section>
    </>
  );
};

export default Index;
