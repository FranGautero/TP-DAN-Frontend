import { Divider, Flex, Text, IconButton, Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import React from "react";

/**
 * @param {{
 * pedido: {
 *  id: string,
 *  fechaPedido: string,
 *  obra: {id: string, descripcion: string},
 *  estado: {id: string, estado: string},
 *  detalle: {id: string, producto: {id: number, descripcion: string, precio: number}, cantidad: number, precio: number}[]
 * },
 *  setSelected: any
 * }} props
 */
function CamionRow({ pedido, removePedido, addPedidoToCatalog }) {
  return (
    <>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text textOverflow="ellipsis" noOfLines={1} textTransform="capitalize">
          {`Id Pedido: ${pedido.id}`}
        </Text>
        <Spacer></Spacer>
      </Flex>
      <Divider mt={2} mb={1} />
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text
          textOverflow="ellipsis"
          noOfLines={2}
          marginRight={2}
          fontSize="small"
        >
          {`Fecha: ${pedido.fechaPedido}`}
        </Text>

        <IconButton
          aria-label="eliminar producto"
          icon={<DeleteIcon />}
          onClick={() => {
            removePedido(pedido);
            addPedidoToCatalog(pedido);
          }}
        />
      </Flex>
    </>
  );
}

export default CamionRow;
