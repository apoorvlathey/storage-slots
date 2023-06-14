import type { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const GA_ID = "G-GRSTHJ7MXH";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `,
        }}
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
