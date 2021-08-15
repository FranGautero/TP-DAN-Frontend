/* eslint-disable eqeqeq */
import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

import React from "react";

/**
 * @param {{
 * cliennte: {
 *  id: string,
 *  razonSocial: string,
 *  cuit: string,
 *  emal: string,
 *  obras: {id: string, descripcion: string, direccion: string}[],
 *  setSelected: any
 * }} props
 */
function ClienteListElement({ cliente, setSelected }) {
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => setSelected(cliente)}
    >
      <Text
        textOverflow="ellipsis"
        noOfLines={1}
        textTransform="capitalize"
        fontSize="medium"
        fontWeight="bold"
      >
        {`Id Cliente: ${cliente.id}`}
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
            {`Razon Social: ${cliente.razonSocial}`}
          </Text>
        </Flex>
        <Badge variant="solid">{`E-mail: ${cliente.emal}`}</Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {`CUIT: ${cliente.cuit}`}
      </Text>
    </Box>
  );
}

export default ClienteListElement;
