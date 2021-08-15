import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Stack,
  Text,
  Box,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { MdClear } from "react-icons/md";
import ProductListElement from "../ProductListElement/ProductListElement";

const MX = [4, 4, 20];
const MT = 6;

/**
 * @param {{
 * Producto: {
 *  id: string,
 *  descripcion: string,
 *  precio: number,
 *  onMobileBackPressed: VoidFunction,
 *  isBackVisible: boolean
 * }} props
 */
export default function ProductDetail({
  producto,
  onClearSelectionPressed,
  isBackVisible,
}) {
  if (!producto)
    return (
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Stack
          direction="column"
          spacing="4"
          alignItems="center"
          px={[4, 10]}
          py={10}
          rounded="xl"
          background="gray.700"
          mx={MX}
        >
          <QuestionOutlineIcon boxSize="14" />
          <Text fontSize="xl" textAlign="center">
            No hay ningún producto seleccionado
          </Text>
          <Divider />
          <Text fontSize="medium" textAlign="center">
            Seleccione un producto de la lista para visualizar el detalle del
            mismo.
          </Text>
        </Stack>
      </Flex>
    );

  return (
    <Flex flex={1} direction="column">
      {!isBackVisible && (
        <Flex mx={MX} mt={MT} direction="row-reverse">
          <IconButton
            aria-label="Deseleccionar cliente"
            icon={<MdClear />}
            rounded="3xl"
            justifySelf="end"
            onClick={() => onClearSelectionPressed()}
          />
        </Flex>
      )}

      <Box mx={MX} mt={MT}>
        <ProductListElement producto={producto} setSelected={() => {}} />
      </Box>

      <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
        <Flex direction="row" justifyContent="space-between">
          <Text fontSize="medium" fontWeight="bold">
            Detalle de Producto
          </Text>

          <Text fontSize="medium" fontWeight="bold">
            descripcion:
            <Badge fontSize="medium" fontWeight="bold" ml={2}>
              {`$${producto.descripcion}`}
            </Badge>
          </Text>
        </Flex>

        <Divider my={2} />

        {/* mostramos manipular productos */}
      </Box>
    </Flex>
  );
}
