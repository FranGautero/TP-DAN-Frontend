import { AddIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Stack,
  Text,
  Box,
  IconButton,
  Badge,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  NumberInput,
  NumberInputField,
  useToast,
} from "@chakra-ui/react";
import { MdClear } from "react-icons/md";
import ProductListElement from "../ProductListElement/ProductListElement";
import axios from "axios";
import { useState } from "react";

const MX = [4, 4, 20];
const MT = 6;

/**
 * @param {{
 * Producto: {
 *  id: string,
 *  nombre: string
 *  descripcion: string,
 *  precioUnitario: string,
 *  stockActual:string
 *  onMobileBackPressed: VoidFunction,
 *  isBackVisible: boolean
 * }} props
 */
export default function ProductDetail({
  producto,
  onClearSelectionPressed,
  isBackVisible,
  updateList,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const [product, setProduct] = useState({
    nombre: "",
    descripcion: "",
    precioUnitario: 100.2,
    descuentoCantidad: 25.2,
    stockActual: 1000,
    stockMinimo: 1000,
    unidad: {
      id: 1,
      descripcion: "unidad",
    },
  });

  const onChangeValues = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:80/api/v1/material/${id}`)
      .then(function (response) {
        console.log(response);
        onClearSelectionPressed();
        axios
          .get("http://localhost:80/api/v1/material/listar")
          .then((res) => {
            console.log(res.data);
            updateList(res.data);
          })
          .catch((err) => console.log(err));
        toast({
          title: "Producto Eliminado",
          description: "Hemos eliminado su Producto",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  const saveProduct = () => {
    console.log(product);
    onClose();
    axios
      .post("http://localhost:80/api/v1/material", product)
      .then(function (response) {
        console.log(response);
        axios
          .get("http://localhost:80/api/v1/material/listar")
          .then((res) => {
            console.log(res.data);
            updateList(res.data);
          })
          .catch((err) => console.log(err));
        toast({
          title: "Producto Creado",
          description: "Hemos Registrado su Producto",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  if (!producto)
    return (
      <>
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
              mismo o precione el boton siguiente para agregar un Producto.
            </Text>
            <Divider />
            <IconButton
              aria-label="Agregar Pedido"
              icon={<AddIcon />}
              rounded="3xl"
              justifySelf="end"
              onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Agregar Un Producto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack>
                    <Input
                      placeholder="nombre"
                      name="nombre"
                      id="nombre"
                      required
                      onChange={onChangeValues}
                    />
                    <Input
                      placeholder="Descripcion"
                      name="descripcion"
                      id="descripcion"
                      required
                      onChange={onChangeValues}
                    />
                    <Text>Precio Unitario</Text>
                    <NumberInput
                      defaultValue={0}
                      precision={2}
                      step={0.1}
                      required
                      name="precioUnitario"
                      id="precioUnitario"
                    >
                      <NumberInputField onChange={onChangeValues} />
                    </NumberInput>
                    <Text>descuento Por Cantidad</Text>
                    <NumberInput
                      defaultValue={0}
                      precision={2}
                      step={0.1}
                      required
                      name="descuentoCantidad"
                      id="descuentoCantidad"
                    >
                      <NumberInputField onChange={onChangeValues} />
                    </NumberInput>
                    <Text>Stock Inicial</Text>
                    <NumberInput
                      defaultValue={1000}
                      required
                      name="stockActual"
                      id="stockActual"
                    >
                      <NumberInputField onChange={onChangeValues} />
                    </NumberInput>
                    <Text>Stock Minimo</Text>
                    <NumberInput
                      defaultValue={1000}
                      required
                      name="stockMinimo"
                      id="stockMinimo"
                    >
                      <NumberInputField onChange={onChangeValues} />
                    </NumberInput>
                  </Stack>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={saveProduct}>
                    Añadir
                  </Button>
                  <Button colorScheme="blue" onClick={onClose}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Flex>
      </>
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
            <Badge
              variant="transparent"
              fontSize="medium"
              fontWeight="bold"
              ml={2}
            >
              {`${producto.nombre}`}
            </Badge>
          </Text>
        </Flex>

        <Divider my={2} />

        <Button color={"red.300"} onClick={() => deleteProduct(producto.id)}>
          Eliminar Producto
        </Button>
      </Box>
    </Flex>
  );
}
