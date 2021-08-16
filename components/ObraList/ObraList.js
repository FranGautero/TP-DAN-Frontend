/* eslint-disable eqeqeq */
import { UnorderedList, Box, Text } from "@chakra-ui/react";
import ObraListElement from "../ObraListElement/ObraListElement";

/**
 * @param {{obra: any[], setSelected: any}} props
 */
export default function ObraList({ obras, setSelected }) {
  return (
    <UnorderedList marginRight={4}>
      {obras.map((c, index) => (
        <Box key={c.id} mt={4} overscrollY="hidden">
          <ObraListElement producto={c} setSelected={setSelected} />
          {obras.length == index + 1 && (
            <Text fontSize="xs" textAlign="center" my={4}>
              No hay mas...
            </Text>
          )}
        </Box>
      ))}
    </UnorderedList>
  );
}
