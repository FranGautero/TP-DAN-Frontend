import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

import React from "react";

/**
 * @param {{
 * producto: {
 *  id: string,
 *  descripcion: string,
 *  precio: number,
 *  setSelected: any
 * }} props
 */
function RealizarPedidoListElement({
  producto,
  setSelected,
  addPressed,
  removeProductFromCatalog,
}) {
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => {
        setSelected(producto);
        addPressed(producto);
        removeProductFromCatalog(producto);
      }}
    >
      <Text
        textOverflow="ellipsis"
        noOfLines={1}
        textTransform="capitalize"
        fontSize="medium"
        fontWeight="bold"
      >
        {`Id Producto: ${producto.id}`}
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
            {`Descripcion: ${producto.descripcion}`}
          </Text>
        </Flex>
        <Badge variant="transparent">{`Precio: ${producto.precio}`}</Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {`Peso: 100 Kg`}
      </Text>
    </Box>
  );
}

export default RealizarPedidoListElement;
