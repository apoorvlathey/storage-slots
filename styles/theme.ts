import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  custom: {
    base: "#e84142",
  },
  bg: {
    900: "#222",
    100: "white",
  },
};

const fonts = {
  custom: "Poppins",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "bg.900",
        fontFamily: "Poppins",
        color: "white", // setting this default here prevents font color from flashing from black to white on page load
      },
    }),
  },
  config,
  colors,
  fonts,
});

export default theme;
