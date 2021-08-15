/* eslint-disable promise/param-names */
/* eslint-disable no-throw-literal */

/**
 * Recupera la lista de pedidos del usuario
 * @param  {string} userId Id del usuario
 * @returns {Promise<Array>} pedidos del usuario
 */
export default async function getCamionesMock(camiones) {
  console.log("Buscando camiones...");

  if (!camiones) {
    throw "No se encontró un id usuario :c";
  }

  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  const localCamiones = localStorage.getItem(camiones_key);
  if (localCamiones) {
    console.log("Recuperamos tus camiones!");
    return JSON.parse(localCamiones);
  } else {
    console.log("Generamos tus camiones!");
    const camiones = camionesMock();
    localStorage.setItem(camiones_key, JSON.stringify(camiones));
    return camiones;
  }
}

// eslint-disable-next-line camelcase
const camiones_key = "camiones";

const camioneslist = [
  {
    id: 1,
    descripcion: "Mercedes 1",
    estado: "EN VIAJE",
  },
  {
    id: 3,
    descripcion: "Scania 1",
    estado: "DISPONIBLE",
  },
  {
    id: 17,
    descripcion: "Mercedes 2",
    estado: "EN VIAJE",
  },
  {
    id: 2,
    descripcion: "Scania 2",
  },
  {
    id: 14,
    descripcion: "Mercedes 3",
    estado: "EN VIAJE",
  },
  {
    id: 45,
    descripcion: "Mercedes 4",
    estado: "DISPONIBLE",
  },
];

function camionesMock() {
  return camioneslist;
}
