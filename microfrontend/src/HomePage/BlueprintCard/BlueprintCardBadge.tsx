import { Badge } from "@chakra-ui/react";

interface BlueprintCardBadgeProps {
  premiumOnly?: boolean;
}

const PremiumBadge = () => {
  return (
    <Badge variant="subtle" colorScheme="purple">
      Premium
    </Badge>
  );
};

const FreeBadge = () => {
  return (
    <Badge variant="subtle" colorScheme="blue">
      Free
    </Badge>
  );
};

const BlueprintCardBadge = ({ premiumOnly }: BlueprintCardBadgeProps) => {
  return premiumOnly ? <PremiumBadge /> : <FreeBadge />;
};

export default BlueprintCardBadge;
