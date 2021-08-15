import Simple from "../../../components/HeaderCorralon/headerCorralon2";
import Pedidos from "../Pedidos/pedidos";
import { Box } from "@chakra-ui/react";

export default function HomeVendedor() {
  return (
    <>
      <Box h="100vh" overflowY="hidden">
        <Simple
          Linkst={["Pedidos", "Distribucion", "Clientes", "Productos"]}
          HomeRoute={"home-vendedor"}
        ></Simple>
        <Pedidos></Pedidos>
      </Box>
    </>
  );
}
