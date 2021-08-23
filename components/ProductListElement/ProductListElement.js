import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

import React from "react";

/**
 * @param {{
 * producto: {
 *  id: string,
 *  nombre: string
 *  descripcion: string,
 *  precioUnitario: string,
 *  stockActual:string
 *  setSelected: any
 * }} props
 */
function ProductListElement({ producto, setSelected }) {
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => setSelected(producto)}
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
        <Badge variant="transparent">{`Precio: ${producto.precioUnitario}`}</Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {`Stock Actual: ${producto.stockActual}`}
      </Text>
    </Box>
  );
}

export default ProductListElement;
