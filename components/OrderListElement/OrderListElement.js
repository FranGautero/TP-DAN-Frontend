/* eslint-disable eqeqeq */
import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import es from "dayjs/locale/es";

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
 * setSelected: any
 * }} props
 */

function OrderListElement({
  pedido,
  setSelected,
  addPedidoToLista,
  removePedidoFromCatalog,
}) {
  const estado = pedido.estado.estado;
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => {
        setSelected(pedido);
        addPedidoToLista(pedido);
        removePedidoFromCatalog(pedido);
      }}
    >
      <Text
        textOverflow="ellipsis"
        noOfLines={1}
        textTransform="capitalize"
        fontSize="medium"
        fontWeight="bold"
      >
        {`Id de Pedido: ${pedido.id}`}
      </Text>
      <Divider mt={2} mb={1} />
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Text
            textOverflow="ellipsis"
            noOfLines={2}
            marginRight={2}
            fontSize="small"
          >
            {`Fecha: ${dayjs(pedido.fechaPedido)
              .locale(es)
              .format("D MMMM YYYY")}`}
          </Text>
          <Text
            textOverflow="ellipsis"
            noOfLines={2}
            marginRight={2}
            fontSize="small"
          >
            {`Nº de productos: ${pedido.detalle.length}`}
          </Text>
        </Flex>
        <Badge
          variant="solid"
          colorScheme={
            estado == "ENTREGADO"
              ? "green"
              : estado == "CANCELADO"
              ? "red"
              : "gray"
          }
        >
          {estado}
        </Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {"Obra: " + pedido.obra.descripcion}
      </Text>
    </Box>
  );
}

export default OrderListElement;
