import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
