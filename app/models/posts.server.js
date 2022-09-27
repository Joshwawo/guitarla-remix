export async function getPosts() {
  const url = `${process.env.API_URL}/posts?populate=imagen`;

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return resultado;
}

  export async function getPost(url) {
    // http://localhost:1337/api
    const urlGuitarra = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`;
    const resultado = await fetch(urlGuitarra);
    const respuesta = await resultado.json();
    return respuesta;
  }
