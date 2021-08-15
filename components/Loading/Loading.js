import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
      <Text mt={4} textAlign="center">
        Cargando...
      </Text>
    </Flex>
  );
}
