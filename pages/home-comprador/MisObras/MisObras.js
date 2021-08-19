import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getObras } from "../../../api";
import { Obralist, ObraDetail, Loading } from "../../../components";
import { useSmallScreenDetector } from "../../../hooks";
import { Scrollbars } from "react-custom-scrollbars-2";

const Obras = () => {
  const myId = 1; // Idealmente esto se recupera con el id real del usuario
  const [selected, setSelected] = useState(null);
  const hasObraSelected = selected;
  const { isLoading, error, data } = useQuery(
    ["obras", myId],
    async () => await getObras(myId)
  );
  const isSmallScreen = useSmallScreenDetector();

  if (isLoading) return <Loading />;

  if (error) return "Algo salio mal: " + error;

  const isBackVisible = isSmallScreen && hasObraSelected;
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
            {console.log(data)}
            <Obralist obras={data} setSelected={setSelected} />
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
          <ObraDetail
            obra={selected}
            isBackVisible={isBackVisible}
            onClearSelectionPressed={() => setSelected(null)}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default Obras;
