import {
  Divider,
  Flex,
  Text,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
function PedidoRow({ producto, removeProduct, addProductToCatalog }) {
  return (
    <>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text textOverflow="ellipsis" noOfLines={1} textTransform="capitalize">
          {`Id Producto: ${producto.id}`}
        </Text>
        <Spacer></Spacer>

        <NumberInput size="sm" defaultValue={1} maxW={20} min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Divider mt={2} mb={1} />
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text
          textOverflow="ellipsis"
          noOfLines={2}
          marginRight={2}
          fontSize="small"
        >
          {`Descripcion: ${producto.descripcion}`}
        </Text>

        <IconButton
          aria-label="eliminar producto"
          icon={<DeleteIcon />}
          onClick={() => {
            removeProduct(producto);
            addProductToCatalog(producto);
          }}
        />
      </Flex>
    </>
  );
}

export default PedidoRow;
