import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PagesWrapperProps {
  children: ReactNode;
}

const PagesWrapper = ({ children }: PagesWrapperProps) => {
  return <Box p={5}>{children}</Box>;
};

export default PagesWrapper;
