import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData, Outlet } from "@remix-run/react";
import style from "~/styles/guitarras.css";
import ListadoGuitarras from "~/components/listadoGuitarras";

// export function meta() {
//   return {
//     title: "GuitarLa - Tienda de guitarras",
//     description: "GuitarLa - Nuestra coleccion de guitarras",
//   };
// }

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

// export async function loader() {
//   const guitarras = await getGuitarras();

//   return guitarras.data;
// }

const Tienda = () => {
  // const guitarras = useLoaderData();

  return (
    <main className="contenedor ">
      {/* <ListadoGuitarras guitarras={guitarras} /> */}
      <Outlet/>
    </main>
  );
};

export default Tienda;
