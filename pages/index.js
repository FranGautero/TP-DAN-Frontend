import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import Link from "next/link";

export default function LogIn() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const router = useRouter();

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      overscrollY="hidden"
    >
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Iniciar Sesión</Heading>
        <Input placeholder="e-mail" variant="filled" mb={3} type="email" />
        <Input placeholder="pass" variant="filled" mb={6} type="password" />

        <Button onClick={() => router.push("/home-vendedor/Pedidos")} mb={6}>
          Log in Vendedor
        </Button>

        <Button
          onClick={() => router.push("/home-comprador/MisPedidos")}
          mb={6}
        >
          Log in Comprador
        </Button>
        <Link href="/registro-usuario">
          <a> Registrarse </a>
        </Link>
      </Flex>
    </Flex>
  );
}
