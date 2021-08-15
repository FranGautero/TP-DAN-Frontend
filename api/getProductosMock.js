/* eslint-disable promise/param-names */
/* eslint-disable no-throw-literal */

/**
 * Recupera la lista de pedidos del usuario
 * @param  {string} userId Id del usuario
 * @returns {Promise<Array>} pedidos del usuario
 */
export default async function getProductosMock(productos) {
  console.log("Buscando productos...");

  if (!productos) {
    throw "No se encontró un id usuario :c";
  }

  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  const localProductos = localStorage.getItem(productos_key);
  if (localProductos) {
    console.log("Recuperamos tus productos!");
    return JSON.parse(localProductos);
  } else {
    console.log("Generamos tus productos!");
    const productos = productosMock();
    localStorage.setItem(productos_key, JSON.stringify(productos));
    return productos;
  }
}

// eslint-disable-next-line camelcase
const productos_key = "productos";

const productoslist = [
  {
    id: 1,
    descripcion: "Piedra",
    precio: 5.0,
  },
  {
    id: 3,
    descripcion: "Tierra",
    precio: 1.0,
  },
  {
    id: 17,
    descripcion: "Tronco",
    precio: 10.0,
  },
  {
    id: 2,
    descripcion: "Roca",
    precio: 2,
  },
  {
    id: 14,
    descripcion: "Mena de oro",
    precio: 300.0,
  },
  {
    id: 45,
    descripcion: "Bloque de ladrillo",
    precio: 100.0,
  },
  {
    id: 14,
    descripcion: "Mena de hierro",
    precio: 200.0,
  },
  {
    id: 5,
    descripcion: "Madera de roble",
    precio: 50.0,
  },
  {
    id: 49,
    descripcion: "Obsidiana",
    precio: 1000.0,
  },
];

function productosMock() {
  return productoslist;
}
