import { defineStyleConfig } from "@chakra-ui/react";

const defaultPadding = "0.75rem";
const cardTheme = defineStyleConfig({
  baseStyle: {
    body: {
      padding: defaultPadding,
    },
    footer: {
      padding: defaultPadding,
    },
    header: {
      padding: defaultPadding,
    },
  },
});

export default cardTheme;
