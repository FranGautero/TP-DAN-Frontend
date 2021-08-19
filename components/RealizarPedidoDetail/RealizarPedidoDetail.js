import {
  Divider,
  Flex,
  Text,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import PedidoRow from "../PedidoRow/PedidoRow";

import { Scrollbars } from "react-custom-scrollbars-2";

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
export default function RealizarPedidoDetail({
  productList,
  removeProduct,
  addProductToCatalog,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return productList.length === 0 ? (
    <Flex flex={1} direction="column" justifyContent="top">
      <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
        <Flex direction="row" justifyContent="center">
          <Text fontSize="medium" fontWeight="bold">
            Armar Pedido
          </Text>
        </Flex>
        <Divider my={2} />
        <Flex direction="row" justifyContent="space-between">
          <Flex rounded={6} p={6} background="gray.800" flexGrow={1}>
            <Text fontSize="medium" textColor={"gray.400"}>
              No Hay Productos Asignados.....
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  ) : (
    <Scrollbars>
      <Flex flex={1} direction="column" justifyContent="top">
        <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
          <Flex direction="row" justifyContent="center">
            <Text fontSize="medium" fontWeight="bold">
              Armar Pedido
            </Text>
          </Flex>
          <Divider my={2} />
          <Flex
            direction="column"
            justifyContent="center"
            rounded={6}
            p={6}
            background="gray.800"
            flexGrow={1}
          >
            {productList.map((p) => (
              <Flex
                key={p.id}
                background="gray.700"
                rounded={6}
                p={4}
                mb={4}
                flexGrow={1}
                flexDirection={"column"}
              >
                <PedidoRow
                  producto={p}
                  removeProduct={removeProduct}
                  addProductToCatalog={addProductToCatalog}
                ></PedidoRow>
              </Flex>
            ))}
          </Flex>
          <Divider my={2} />
          <Button color="green.400" onClick={onOpen}>
            Elegir Metodo de Pago
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
            <ModalOverlay />
            <ModalContent maxW="50rem" h="35rem">
              <ModalHeader>Metodo de Pago</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button variant="ghost" mr={3}>
                  Solicitar Pedido
                </Button>
                <Button colorScheme="blue" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Scrollbars>
  );
}
