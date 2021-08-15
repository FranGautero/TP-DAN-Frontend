/* eslint-disable promise/param-names */
/* eslint-disable no-throw-literal */
import faker from "faker";
import dayjs from "dayjs";

/**
 * Recupera la lista de pedidos del usuario
 * @param  {string} userId Id del usuario
 * @returns {Promise<Array>} pedidos del usuario
 */
export default async function getPedidosMock(userId) {
  console.log("Buscando pedidos...");

  if (!userId) {
    throw "No se encontró un id usuario :c";
  }

  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  const localPedidos = localStorage.getItem(pedidos_key);
  if (localPedidos) {
    console.log("Recuperamos tus pedidos!");
    return JSON.parse(localPedidos);
  } else {
    console.log("Generamos tus pedidos!");
    const pedidos = pedidosMock();
    localStorage.setItem(pedidos_key, JSON.stringify(pedidos));
    return pedidos;
  }
}

// eslint-disable-next-line camelcase
const pedidos_key = "pedidos";

const ESTADOS = [
  { id: 1, estado: "EN CAMINO" },
  { id: 2, estado: "PREPARADO" },
  { id: 3, estado: "CANCELADO" },
  { id: 4, estado: "ENTREGADO" },
];

const PRODUCTOS = [
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

function generarDetalleMock() {
  const id = faker.random.uuid();
  const producto = PRODUCTOS[Math.floor(Math.random() * PRODUCTOS.length)];
  const cantidad = Math.floor(Math.random() * 1000);
  const precio = producto.precio * cantidad;
  return { id, producto, cantidad, precio };
}

function generarPedidoMock() {
  const id = faker.random.uuid().substring(0, 13);
  const daysBefore = Math.floor(Math.random() * 30) + 1;
  const fechaPedido = dayjs().subtract(daysBefore, "days").toISOString();
  const obra = {
    id: faker.random.uuid(),
    descripcion: faker.lorem.words(6),
  };
  const estado = ESTADOS[Math.floor(Math.random() * ESTADOS.length)];
  const detalleLength = Math.floor(Math.random() * 10) + 1;
  const detalle = Array.from({ length: detalleLength }, generarDetalleMock);
  return { id, fechaPedido, obra, detalle, estado };
}

function pedidosMock() {
  const pedidosAmount = Math.floor(Math.random() * 20) + 1;
  return Array.from({ length: pedidosAmount }, generarPedidoMock);
}
