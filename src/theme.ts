import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  //   useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#eef5f6",
      100: "#d3e0e2",
      200: "#b5cbd0",
      300: "#95b7be",
      400: "#77a3ad",
      500: "#5e8993",
      600: "#4a6a72",
      700: "#364b51",
      800: "#202d30",
      900: "#080f11",
    },
  },
});
export default theme;
