import { ReactNode } from "react";
import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface BlueprintCardDescriptionProps extends Omit<TextProps, "fontSize"> {
  children: ReactNode;
}

const BlueprintCardDescription = ({
  children,
  ...textProps
}: BlueprintCardDescriptionProps) => {
  return (
    <Text fontSize="sm" {...textProps}>
      {children}
    </Text>
  );
};

export default BlueprintCardDescription;
