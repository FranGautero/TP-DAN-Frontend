import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProductos } from "../../../api";
import {
  RealizarPedidoList,
  Loading,
  RealizarPedidoDetail,
} from "../../../components";
import { useSmallScreenDetector } from "../../../hooks";
import { Scrollbars } from "react-custom-scrollbars-2";

const RealizarPedido = () => {
  const myId = 1; // Idealmente esto se recupera con el id real del usuario

  // Hooks para El armado del Pedido

  const [productList, setProductList] = useState([]);

  const addProductToList = (product) => setProductList((p) => [...p, product]);

  const removeProductFromList = (product) =>
    setProductList((plist) => plist.filter((p) => p.id !== product.id));

  // Hooks para La Lista de Productos

  const [catalog, setCatalog] = useState([]);

  const addProductToCatalog = (product) => setCatalog((p) => [...p, product]);

  const removeProductFromCatalog = (product) =>
    setCatalog((plist) => plist.filter((p) => p.id !== product.id));

  // Hooks para el Prducto Seleccionado

  const [selected, setSelected] = useState(null);

  const hasProductSelected = selected;
  const { isLoading, error } = useQuery(
    ["productos", myId],
    async () => await getProductos(myId).then((a) => setCatalog(a))
  );

  const isSmallScreen = useSmallScreenDetector();

  if (isLoading) return <Loading />;

  if (error) return "Algo salio mal: " + error;

  const isBackVisible = isSmallScreen && hasProductSelected;
  const isListVisible = !isSmallScreen || (isSmallScreen && !isBackVisible);
  const isDetailVisible = !isSmallScreen || isBackVisible;

  return (
    <Grid
      h="94vh"
      templateColumns={["1fr", "1fr", "30% 1fr"]}
      templateRows="auto 1fr"
    >
      <GridItem colSpan={2} rowSpan={1}></GridItem>
      {isListVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="true"
          borderRightColor="gray.700"
          borderRightWidth={1}
          rowSpan={1}
          colSpan={1}
        >
          <Scrollbars>
            <RealizarPedidoList
              productos={catalog}
              setSelected={setSelected}
              addPressed={addProductToList}
              removeProductFromCatalog={removeProductFromCatalog}
            />
            {console.log(productList)}
          </Scrollbars>
        </GridItem>
      )}
      {isDetailVisible && (
        <GridItem
          overflowX="hidden"
          overflowY="true"
          rowSpan={1}
          colSpan={1}
          display="flex"
        >
          <RealizarPedidoDetail
            productList={productList}
            isBackVisible={isBackVisible}
            onClearSelectionPressed={() => setSelected(null)}
            removeProduct={removeProductFromList}
            addProductToCatalog={addProductToCatalog}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default RealizarPedido;
