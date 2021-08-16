/* eslint-disable eqeqeq */
import { AddIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Stack,
  Text,
  Box,
  IconButton,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Grid,
  GridItem,
  UnorderedList,
} from "@chakra-ui/react";
import { MdClear } from "react-icons/md";
import CamionListElement from "../CamionListElement/camionListElement";
import { OrderList, Loading } from "../../components";
import { useState } from "react";
import { getPedidos } from "../../api";
import { useQuery } from "react-query";
import { useSmallScreenDetector } from "../../hooks";
import { Scrollbars } from "react-custom-scrollbars-2";

const MX = [4, 4, 20];
const MT = 6;

/**
 * @param {{
 * camion: {
 *  id: string,
 *  descripcion: string,
 *  estado: string,
 *  onMobileBackPressed: VoidFunction,
 *  isBackVisible: boolean
 * }} props
 */

const Pedidos = ({ onClose, setPedidosLista }) => {
  const myId = 1; // Idealmente esto se recupera con el id real del usuario
  const [selected, setSelected] = useState(null);
  const hasProductSelected = selected;
  const { isLoading, error, data } = useQuery(
    ["pedidos", myId],
    async () => await getPedidos(myId)
  );
  const isSmallScreen = useSmallScreenDetector();

  if (isLoading) return <Loading />;

  if (error) return "Algo salio mal: " + error;

  const isBackVisible = isSmallScreen && hasProductSelected;
  // eslint-disable-next-line no-unused-vars
  const isListVisible = !isSmallScreen || (isSmallScreen && !isBackVisible);
  // eslint-disable-next-line no-unused-vars
  const isDetailVisible = !isSmallScreen || isBackVisible;

  return (
    <Grid
      h="43vh"
      templateColumns={["1fr", "1fr", "100% 1fr"]}
      templateRows="auto 1fr"
      background={"gray.800"}
      rounded={6}
    >
      <GridItem colSpan={2} rowSpan={1}></GridItem>

      <GridItem
        overflowX="hidden"
        overflowY="true"
        borderRightColor="gray.700"
        borderRightWidth={"auto"}
        rowSpan={1}
        colSpan={1}
      >
        <Scrollbars>
          <OrderList
            pedidos={data}
            setSelected={() => {
              setSelected();
              setPedidosLista((prev) => prev.push([selected]));
            }}
            onClose={onClose}
          />
        </Scrollbars>
      </GridItem>
    </Grid>
  );
};

export default function CamionAssign({ camion, onClearSelectionPressed }) {
  // (prev, pedido) => prev.push(pedido)
  const [pedidoLista, setPedidoLista] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (!camion)
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
            No hay ningún camion seleccionado
          </Text>
          <Divider />
          <Text fontSize="medium" textAlign="center">
            Seleccione un camión de la lista para visualizar el detalle del
            mismo.
          </Text>
        </Stack>
      </Flex>
    );

  return (
    <Flex flex={1} direction="column">
      <Flex mx={MX} mt={MT} direction="row-reverse">
        <IconButton
          aria-label="Deseleccionar camion"
          icon={<MdClear />}
          rounded="3xl"
          justifySelf="end"
          onClick={() => onClearSelectionPressed()}
        />
      </Flex>

      <Box mx={MX} mt={MT}>
        <CamionListElement camion={camion} setSelected={() => {}} />
      </Box>

      {camion.estado == "EN VIAJE" ? (
        <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize="medium" fontWeight="bold">
              Liberar Camion
            </Text>

            <Button color={"green.100"}> Liberar </Button>
          </Flex>

          <Divider my={2} />
        </Box>
      ) : pedidoLista.length === 0 ? (
        <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize="medium" fontWeight="bold">
              Asignar Pedidos
            </Text>
          </Flex>
          <Divider my={2} />
          <Flex direction="row" justifyContent="space-betwee">
            <Flex rounded={6} p={6} background="gray.800" flexGrow={1}>
              <Text fontSize="medium" textColor={"gray.400"}>
                No Hay Pedidos Asignados.....
              </Text>

              <Spacer></Spacer>
              <IconButton
                aria-label="Agregar Pedido"
                icon={<AddIcon />}
                rounded="3xl"
                justifySelf="end"
                onClick={onOpen}
              />

              <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay />
                <ModalContent maxW="50rem" h="35rem">
                  <ModalHeader>Seleccionar Pedido</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Pedidos
                      onClose={onClose}
                      setPedidosLista={setPedidoLista}
                    ></Pedidos>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3}>
                      Añadir
                    </Button>
                    <Button colorScheme="blue" onClick={onClose}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box mx={MX} mt={MT} background="gray.700" rounded={6} p={4}>
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize="medium" fontWeight="bold">
              Asignar Pedidos
            </Text>
          </Flex>
          <Divider my={2} />
          <Flex direction="row" justifyContent="space-betwee">
            <Flex rounded={6} p={6} background="gray.800" flexGrow={1}>
              {console.log(pedidoLista.toString)}
              <UnorderedList marginRight={4}>
                {pedidoLista.map((p, index) => (
                  <Box key={p.id} mt={4} overscrollY="hidden"></Box>
                ))}
              </UnorderedList>
              <IconButton
                aria-label="Agregar Pedido"
                icon={<AddIcon />}
                rounded="3xl"
                justifySelf="end"
                onClick={onOpen}
              />

              <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay />
                <ModalContent maxW="50rem" h="35rem">
                  <ModalHeader>Seleccionar Pedido</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Pedidos
                      onClose={onClose}
                      setPedidosLista={setPedidoLista}
                    ></Pedidos>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" mr={3}>
                      Añadir
                    </Button>
                    <Button colorScheme="blue" onClick={onClose}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
