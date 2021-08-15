/* eslint-disable eqeqeq */
import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

import React from "react";

/**
 * @param {{
 * camion: {
 *  id: string,
 *  descripcion: string,
 *  estado: string,
 *  setSelected: any
 * }} props
 */
function CamionListElement({ camion, setSelected }) {
  const estado = camion.estado;
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => setSelected(camion)}
    >
      <Text
        textOverflow="ellipsis"
        noOfLines={1}
        textTransform="capitalize"
        fontSize="medium"
        fontWeight="bold"
      >
        {`Id Camion: ${camion.id}`}
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
            {`Camion: ${camion.descripcion}`}
          </Text>
        </Flex>
        <Badge
          variant="solid"
          colorScheme={
            estado == "DISPONIBLE"
              ? "green"
              : estado == "EN VIAJE"
              ? "red"
              : "gray"
          }
        >
          {estado}
        </Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {"Otro Atributo: "}
      </Text>
    </Box>
  );
}

export default CamionListElement;
