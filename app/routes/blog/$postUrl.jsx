import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLa - Entrada No Encontrada",
      descripcion: `Guitarras, venda de guitarras, guitarra, entrada no encontrada`,
    };
  }

  return {
    title: `GuitarLa - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras, venda de guitarras, entrada ${data.data[0].attributes.titulo}`,
  };
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada No Encontrada 😔",
    });
  }

  return post;
}

const PostUrl = () => {
  const post = useLoaderData();

  //   console.log(post.data[0].attributes);

  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className=" post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen Blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default PostUrl;
