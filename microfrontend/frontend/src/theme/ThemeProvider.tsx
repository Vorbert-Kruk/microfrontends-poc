import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import theme from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line
console.log(theme);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
