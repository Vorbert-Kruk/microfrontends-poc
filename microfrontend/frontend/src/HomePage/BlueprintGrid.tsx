import { SimpleGrid } from "@chakra-ui/react";
import BlueprintCard from "./BlueprintCard/BlueprintCard";
import type { Blueprint } from "./types";

export interface BlueprintGridProps {
  blueprints: Blueprint[];
  userIsPremium: boolean;
}

const BlueprintGrid = ({ blueprints, userIsPremium }: BlueprintGridProps) => {
  return (
    <SimpleGrid minChildWidth={270} spacing={5}>
      {blueprints.map((blueprint) => (
        <BlueprintCard
          key={blueprint.id}
          name={blueprint.name}
          description={blueprint.description}
          author={blueprint.author}
          version={blueprint.version}
          lastUpdate={blueprint.lastUpdate}
          premiumOnly={blueprint.premiumOnly}
          userIsPremium={userIsPremium}
        />
      ))}
    </SimpleGrid>
  );
};

export default BlueprintGrid;
