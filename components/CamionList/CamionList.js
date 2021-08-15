/* eslint-disable eqeqeq */
import { UnorderedList, Box, Text } from "@chakra-ui/react";
import CamionListElement from "../CamionListElement/camionListElement";

/**
 * @param {{camion: any[], setSelected: any}} props
 */
export default function CamionList({ camiones, setSelected }) {
  return (
    <UnorderedList marginRight={4}>
      {camiones.map((c, index) => (
        <Box key={c.id} mt={4} overscrollY="hidden">
          <CamionListElement camion={c} setSelected={setSelected} />
          {camiones.length == index + 1 && (
            <Text fontSize="xs" textAlign="center" my={4}>
              No hay mas...
            </Text>
          )}
        </Box>
      ))}
    </UnorderedList>
  );
}
