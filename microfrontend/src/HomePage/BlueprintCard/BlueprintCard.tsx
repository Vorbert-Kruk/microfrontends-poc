import {
  Box,
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
import { downloadBlueprintUrl } from "./consts";

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
  const handleDownloadClick = () => {
    window.open(downloadBlueprintUrl, "__blank");
  };

  return (
    <CardWrapper>
      <CardHeader>
        <Heading size="md">{title}</Heading>
        <BlueprintCardDescription pt="1" noOfLines={1} title={description}>
          {description}
        </BlueprintCardDescription>
      </CardHeader>
      <Box>
        <Divider />
      </Box>
      <CardBody>
        <BlueprintCardDescription>Author: {author}</BlueprintCardDescription>
        <BlueprintCardDescription>Version: {version}</BlueprintCardDescription>
        <BlueprintCardDescription>
          Last update: {lastUpdate}
        </BlueprintCardDescription>
        <BlueprintCardDescription>{premiumOnly}</BlueprintCardDescription>
      </CardBody>
      <Box>
        <Divider />
      </Box>
      <CardFooter>
        <Button
          size="sm"
          colorScheme="blue"
          leftIcon={<DownloadIcon />}
          onClick={handleDownloadClick}
        >
          Download blueprint
        </Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default BlueprintCard;
