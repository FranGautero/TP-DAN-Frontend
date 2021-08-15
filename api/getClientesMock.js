/* eslint-disable promise/param-names */
/* eslint-disable no-throw-literal */

/**
 * Recupera la lista de pedidos del usuario
 * @param  {string} userId Id del usuario
 * @returns {Promise<Array>} pedidos del usuario
 */
export default async function getClientesMock(clientes) {
  console.log("Buscando clientes...");

  if (!clientes) {
    throw "No se encontró un id usuario :c";
  }

  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  const localClientes = localStorage.getItem(clientes_key);
  if (localClientes) {
    console.log("Recuperamos tus clientes!");
    return JSON.parse(localClientes);
  } else {
    console.log("Generamos tus clientes!");
    const clientes = clientesMock();
    localStorage.setItem(clientes_key, JSON.stringify(clientes));
    return clientes;
  }
}

// eslint-disable-next-line camelcase
const clientes_key = "clientes";

const cliente1 = {
  id: 1,
  razonSocial: "Empresa1",
  cuit: 123456789420,
  emal: "asd@asd.asd",
  obras: [
    { id: 1, descripcion: "obra1", direccion: "dir1" },
    { id: 2, descripcion: "obra2", direccion: "dir2" },
    { id: 3, descripcion: "obra3", direccion: "dir3" },
  ],
};

const cliente2 = {
  id: 2,
  razonSocial: "Empresa3",
  cuit: 123456789420,
  emal: "asd@asd.asd",
  obras: [
    { id: 4, descripcion: "obra4", direccion: "dir4" },
    { id: 5, descripcion: "obra5", direccion: "dir5" },
    { id: 6, descripcion: "obra6", direccion: "dir6" },
  ],
};

const cliente3 = {
  id: 3,
  razonSocial: "Empresa3",
  cuit: 123456789420,
  emal: "asd@asd.asd",
  obras: [
    { id: 7, descripcion: "obra7", direccion: "dir7" },
    { id: 8, descripcion: "obra8", direccion: "dir8" },
    { id: 9, descripcion: "obra9", direccion: "dir9" },
  ],
};
const clientes = [cliente1, cliente2, cliente3];

function clientesMock() {
  return clientes;
}
