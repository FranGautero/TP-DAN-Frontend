/* eslint-disable promise/param-names */
/* eslint-disable no-throw-literal */

/**
 * Recupera la lista de pedidos del usuario
 * @param  {string} userId Id del usuario
 * @returns {Promise<Array>} pedidos del usuario
 */
export default async function getObrasMock(obras) {
  console.log("Buscando obras...");

  if (!obras) {
    throw "No se encontró un id usuario :c";
  }

  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  const localObras = localStorage.getItem(obras_key);
  if (localObras) {
    console.log("Recuperamos tus obras!");
    return JSON.parse(localObras);
  } else {
    console.log("Generamos tus obras!");
    const obras = obrasMock();
    localStorage.setItem(obras_key, JSON.stringify(obras));
    return obras;
  }
}

// eslint-disable-next-line camelcase
const obras_key = "obras";

const obraslist = [
  {
    id: 1,
    descripcion: "Obra 1",
    direccion: "Direccion 1",
  },
  {
    id: 3,
    descripcion: "Obra 2",
    direccion: "Direccion 2",
  },
  {
    id: 17,
    descripcion: "Obra 3",
    direccion: "Direccion 3",
  },
  {
    id: 2,
    descripcion: "Obra 4",
    direccion: "Direccion 4",
  },
  {
    id: 14,
    descripcion: "Obra 5",
    direccion: "Direccion 5",
  },
  {
    id: 45,
    descripcion: "Obra 6",
    direccion: "Direccion 6",
  },
];

function obrasMock() {
  return obraslist;
}
