import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import BlueprintCardDescription from "./BlueprintCardDescription";

const CardWrapper = styled(Card)`
  max-width: 300px;
`;

interface BlueprintCardProps {
  title: string;
  description: string;
  author: string;
  version: string;
  lastUpdate: string;
  premiumOnly: boolean;
  // NOTE: To add during future development
  // userIsPremium
}

const BlueprintCard = ({
  title,
  description,
  author,
  version,
  lastUpdate,
  premiumOnly,
}: BlueprintCardProps) => {
  return (
    <CardWrapper>
      <CardHeader>
        <Heading size="md">{title}</Heading>
        <BlueprintCardDescription pt="1">
          {description}
        </BlueprintCardDescription>
      </CardHeader>
      <Divider />
      <CardBody>
        <BlueprintCardDescription>Author: {author}</BlueprintCardDescription>
        <BlueprintCardDescription>Version: {version}</BlueprintCardDescription>
        <BlueprintCardDescription>
          Last update: {lastUpdate}
        </BlueprintCardDescription>
        <BlueprintCardDescription>{premiumOnly}</BlueprintCardDescription>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button size="sm" colorScheme="blue" leftIcon={<DownloadIcon />}>
          Download blueprint
        </Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default BlueprintCard;
