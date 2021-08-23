import { useRouter } from "next/router";
import { useKeycloak } from "@react-keycloak/ssr";

export default function LogIn() {
  const router = useRouter();
  const { keycloak } = useKeycloak();

  console.log(keycloak.token);

  // eslint-disable-next-line no-unused-expressions
  keycloak.authenticated ? (
    keycloak.hasRealmRole("cliente") ? (
      <div onLoad={router.push("/home-comprador/MisPedidos")}></div>
    ) : keycloak.hasRealmRole("empleado") ? (
      <div onLoad={router.push("/home-vendedor/Pedidos")}></div>
    ) : null
  ) : null;

  return null;
}
