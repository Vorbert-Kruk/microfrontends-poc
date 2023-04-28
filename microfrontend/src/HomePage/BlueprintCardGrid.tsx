import { SimpleGrid } from "@chakra-ui/react";
import BlueprintCard from "./BlueprintCard/BlueprintCard";
import type { Blueprint } from "./BlueprintCard/types";

interface BlueprintGridProps {
  blueprints: Blueprint[];
}

const BlueprintGrid = ({ blueprints }: BlueprintGridProps) => {
  return (
    <SimpleGrid minChildWidth={270} spacing={5}>
      {blueprints.map((blueprint) => (
        <BlueprintCard
          key={blueprint.id}
          title={blueprint.title}
          description={blueprint.description}
          author={blueprint.author}
          version={blueprint.version}
          lastUpdate={blueprint.lastUpdate}
          premiumOnly={blueprint.premiumOnly}
          userIsPremium={false}
        />
      ))}
    </SimpleGrid>
  );
};

export default BlueprintGrid;
