import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import cardTheme from "./cardTheme";
import dividerTheme from "./dividerTheme";

const theme: Partial<ChakraTheme> = {
  components: {
    Card: cardTheme,
    Divider: dividerTheme,
  },
};

export default extendTheme(theme);
