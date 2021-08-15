/* eslint-disable react/prop-types */

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: "none !important" },
      },
    },
  },
};

const darkModeOnlyMode = extendTheme({ config });
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={darkModeOnlyMode}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
