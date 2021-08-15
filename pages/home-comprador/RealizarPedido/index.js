import Simple from "../../../components/HeaderCorralon/headerCorralon2";
import RealizarPedido from "./RealizarPedido";
import { Box } from "@chakra-ui/react";

export default function HomeVendedor() {
  return (
    <>
      <Box h="100vh" overflowY="hidden">
        <Simple
          Linkst={["MisPedidos", "MisObras", "RealizarPedido"]}
          HomeRoute={"home-comprador"}
        ></Simple>
        <RealizarPedido></RealizarPedido>
      </Box>
    </>
  );
}
