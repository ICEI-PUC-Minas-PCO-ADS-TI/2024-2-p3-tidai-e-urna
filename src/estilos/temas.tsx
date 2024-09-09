import { extendTheme } from "native-base";

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: "#8d8d99",
    },
    blue: {
      500: "#339cff",
      800: "#0b3b60",
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
