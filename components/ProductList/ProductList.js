/* eslint-disable eqeqeq */
import { UnorderedList, Box, Text } from "@chakra-ui/react";
import ProductListElement from "../ProductListElement/ProductListElement";

/**
 * @param {{producto: any[], setSelected: any}} props
 */
export default function ProductoList({ productos, setSelected }) {
  return (
    <UnorderedList marginRight={4}>
      {productos.map((c, index) => (
        <Box key={c.id} mt={4} overscrollY="hidden">
          <ProductListElement producto={c} setSelected={setSelected} />
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
