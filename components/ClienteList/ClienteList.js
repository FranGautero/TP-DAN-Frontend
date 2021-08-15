/* eslint-disable eqeqeq */
import { UnorderedList, Box, Text } from "@chakra-ui/react";
import ClienteListElement from "../ClienteListElement/ClienteListElement";

/**
 * @param {{cliente: any[], setSelected: any}} props
 */
export default function ClienteList({ clientes, setSelected }) {
  return (
    <UnorderedList marginRight={4}>
      {clientes.map((c, index) => (
        <Box key={c.id} mt={4} overscrollY="hidden">
          <ClienteListElement cliente={c} setSelected={setSelected} />
          {clientes.length == index + 1 && (
            <Text fontSize="xs" textAlign="center" my={4}>
              No hay mas...
            </Text>
          )}
        </Box>
      ))}
    </UnorderedList>
  );
}
