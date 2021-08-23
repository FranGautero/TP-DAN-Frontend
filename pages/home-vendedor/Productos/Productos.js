import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProductList, ProductDetail } from "../../../components";
import { useSmallScreenDetector } from "../../../hooks";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";

const Productos = () => {
  // const myId = 1; // Idealmente esto se recupera con el id real del usuario
  const [selected, setSelected] = useState(null);
  const hasProductSelected = selected;
  // const { isLoading, error, data } = useQuery(
  //   ["productos", myId],
  //   async () => await getProductos(myId)
  // );
  const isSmallScreen = useSmallScreenDetector();

  // if (isLoading) return <Loading />;

  // if (error) return "Algo salio mal: " + error;

  const isBackVisible = isSmallScreen && hasProductSelected;
  const isListVisible = !isSmallScreen || (isSmallScreen && !isBackVisible);
  const isDetailVisible = !isSmallScreen || isBackVisible;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:80/api/v1/material/listar")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Scrollbars universal={true}>
            <ProductList productos={data} setSelected={setSelected} />
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
          <ProductDetail
            producto={selected}
            isBackVisible={isBackVisible}
            onClearSelectionPressed={() => setSelected(null)}
            updateList={setData}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default Productos;
