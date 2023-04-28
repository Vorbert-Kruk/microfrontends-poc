import { extendTheme } from "@chakra-ui/react";
import cardTheme from "./cardTheme";
import dividerTheme from "./dividerTheme";

const theme = extendTheme({
  components: {
    Card: cardTheme,
    Divider: dividerTheme,
  },
});

export default theme;
