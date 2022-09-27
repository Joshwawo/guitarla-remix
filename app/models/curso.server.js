export async function getCurso() {
  const url = `${process.env.API_URL}/curso?populate=imagen`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
}
