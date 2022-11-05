import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/600.css";
import "@fontsource/source-sans-pro/300.css";
import { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
