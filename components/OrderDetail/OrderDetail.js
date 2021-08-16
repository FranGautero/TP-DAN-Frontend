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
import { OrderListElement } from "..";

const MX = [4, 4, 20];
const MT = 6;

/**
 * @param {{
 * pedido: {
 *  id: string,
 *  fechaPedido: string,
 *  obra: {id: string, descripcion: string},
 *  estado: {id: string, estado: string},
 *  detalle: {id: string, producto: {id: number, descripcion: string, precio: number}, cantidad: number, precio: number}[]
 * },
 * onMobileBackPressed: VoidFunction,
 * isBackVisible: boolean
 * }} props
 */
export default function OrderDetail({
  pedido,
  onClearSelectionPressed,
  isBackVisible,
}) {
  if (!pedido)
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
            No hay ningún pedido seleccionado
          </Text>
          <Divider />
          <Text fontSize="medium" textAlign="center">
            Seleccione un pedido de la lista para visualizar el detalle del
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
            aria-label="Deseleccionar producto"
            icon={<MdClear />}
            rounded="3xl"
            justifySelf="end"
            onClick={() => onClearSelectionPressed()}
          />
        </Flex>
      )}

      <Box mx={MX} mt={MT}>
        <OrderListElement pedido={pedido} setSelected={() => {}} />
      </Box>

      <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
        <Flex direction="row" justifyContent="space-between">
          <Text fontSize="medium" fontWeight="bold">
            Detalle del pedido
          </Text>

          <Text fontSize="medium" fontWeight="bold">
            Total:
            <Badge fontSize="medium" fontWeight="bold" ml={2}>
              {`$${pedido.detalle.reduce((suma, pd) => suma + pd.precio, 0)}`}
            </Badge>
          </Text>
        </Flex>

        <Divider my={2} />

        {/* Iteramos sobre la lista de detalles de pedido para renderizar los elementos */}
        {pedido.detalle.map((dp) => (
          <>
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column" flex={5}>
                <Text>{dp.producto.descripcion}</Text>
                <Flex direction="row" justifyContent="space-between">
                  <Text fontSize="xs">{`Unidades: ${dp.cantidad}`}</Text>
                  <Text fontSize="xs">{`Precio Unitario: $${dp.producto.precio}`}</Text>
                </Flex>
              </Flex>
              <Flex direction="column" alignSelf="center" flex={1}>
                <Text fontSize="xs" textAlign="center">
                  Total
                </Text>
                <Text fontSize="xs" textAlign="center">{`$${dp.precio}`}</Text>
              </Flex>
            </Flex>
            <Divider my={1} />
          </>
        ))}
      </Box>
    </Flex>
  );
}
