import { Badge } from "@chakra-ui/react";

interface BlueprintCardBadgeProps {
  isPremium?: boolean;
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

const BlueprintCardBadge = ({ isPremium }: BlueprintCardBadgeProps) => {
  return isPremium ? <PremiumBadge /> : <FreeBadge />;
};

export default BlueprintCardBadge;
