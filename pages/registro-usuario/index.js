import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Registro() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Registro Cliente</Heading>
        <Input placeholder="e-mail" variant="filled" mb={3} type="email" />
        <Input
          placeholder="Contraseña"
          variant="filled"
          mb={3}
          type="password"
        />
        <Input placeholder="Cuit" variant="filled" mb={3} type="text" />
        <Input placeholder="Razon Social" variant="filled" mb={6} type="text" />
        <Button mb={6}>Registrarse</Button>
      </Flex>
    </Flex>
  );
}
