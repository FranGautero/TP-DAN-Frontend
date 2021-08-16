import { Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

import React from "react";

/**
 * @param {{
 * obra: {
 *  id: string,
 *  descripcion: string,
 *  direcccion: string,
 *  setSelected: any
 * }} props
 */
function ObraListElement({ obra, setSelected }) {
  return (
    <Box
      background="gray.700"
      rounded={6}
      p={4}
      onClick={() => setSelected(obra)}
    >
      <Text
        textOverflow="ellipsis"
        noOfLines={1}
        textTransform="capitalize"
        fontSize="medium"
        fontWeight="bold"
      >
        {`Id Obra: ${obra.id}`}
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
            {`Descripcion: ${obra.descripcion}`}
          </Text>
        </Flex>
        <Badge variant="transparent">{`Direcccion: ${obra.direcccion}`}</Badge>
      </Flex>
      <Divider mt={1} mb={1} />

      <Text fontSize="xs" fontStyle="italic" mt={1}>
        {`Tipo: Construccion`}
      </Text>
    </Box>
  );
}

export default ObraListElement;
