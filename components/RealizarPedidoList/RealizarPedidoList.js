/* eslint-disable eqeqeq */
import { UnorderedList, Box, Text } from "@chakra-ui/react";
import RealizarPedidoListElement from "../RealizarPedidoListElement/RealizarPedidoListElement";

/**
 * @param {{producto: any[], setSelected: any}} props
 */
export default function RealizarPedidoList({
  productos,
  setSelected,
  addPressed,
  removeProductFromCatalog,
}) {
  return (
    <UnorderedList marginRight={4}>
      {productos.map((c, index) => (
        <Box key={c.id} mt={4} overscrollY="hidden">
          <RealizarPedidoListElement
            producto={c}
            setSelected={setSelected}
            addPressed={addPressed}
            removeProductFromCatalog={removeProductFromCatalog}
          />
          {productos.length == index + 1 && (
            <Text fontSize="xs" textAlign="center" my={4}>
              No hay mas...
            </Text>
          )}
        </Box>
      ))}
    </UnorderedList>
  );
}
