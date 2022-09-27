export async function getGuitarras() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`;

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return resultado;
}

export async function getGuitarra(url) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`;
  const resultado = await fetch(urlGuitarra);
  const respuesta = await resultado.json();
  return respuesta;
}
