import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import BlueprintCardDescription from "./BlueprintCardDescription";
import BlueprintCardBadge from "./BlueprintCardBadge";
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
  // TODO Norbert: Adjust it during future development
  userIsPremium?: boolean;
}

const BlueprintCard = ({
  title,
  description,
  author,
  version,
  lastUpdate,
  premiumOnly,
  userIsPremium,
}: BlueprintCardProps) => {
  const shouldDisableDownloadButton = premiumOnly && !userIsPremium;
  const handleDownloadClick = () => {
    window.open(downloadBlueprintUrl, "__blank");
  };

  return (
    <CardWrapper>
      <CardHeader>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="md">{title}</Heading>
          <BlueprintCardBadge premiumOnly={premiumOnly} />
        </Stack>
        <BlueprintCardDescription pt="1" title={description}>
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
          isDisabled={shouldDisableDownloadButton}
          title={
            shouldDisableDownloadButton
              ? "Only premium users can download this blueprint"
              : undefined
          }
        >
          Download blueprint
        </Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default BlueprintCard;
