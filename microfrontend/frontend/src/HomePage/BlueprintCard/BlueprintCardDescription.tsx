import { ReactNode } from "react";
import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface BlueprintCardDescriptionProps
  extends Omit<TextProps, "fontSize" | "noOfLines"> {
  children: ReactNode;
}

const BlueprintCardDescription = ({
  children,
  ...textProps
}: BlueprintCardDescriptionProps) => {
  return (
    <Text fontSize="sm" noOfLines={1} {...textProps}>
      {children}
    </Text>
  );
};

export default BlueprintCardDescription;
