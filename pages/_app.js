/* eslint-disable react/prop-types */
import cookie from "cookie";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";

const keycloakCfg = {
  realm: "dan",
  url: "http://localhost:8080/auth/",
  clientId: "app-dan",
};

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

function MyApp({ Component, pageProps, cookies }) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
      initOptions={{ onLoad: "login-required" }}
    >
      {console.log(SSRKeycloakProvider)}
      <ChakraProvider theme={darkModeOnlyMode}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </SSRKeycloakProvider>
  );
}

function parseCookies(req) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context.ctx.req),
  };
};

export default MyApp;
