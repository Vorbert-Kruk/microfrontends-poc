import { useEffect, useState } from "react";
import type { Blueprint } from "./types";
import BlueprintCardGrid from "./BlueprintGrid";
import type { BlueprintGridProps } from "./BlueprintGrid";
import { Alert, AlertDescription, AlertIcon, Spinner } from "@chakra-ui/react";
import api from "../api";

enum FetchState {
  "FETCHING",
  "FETCHED",
  "ERROR",
}

export type HomePageProps = Pick<BlueprintGridProps, "userIsPremium">;

const HomePage = ({ userIsPremium }: HomePageProps) => {
  const [dataState, setDataState] = useState<FetchState>(FetchState.FETCHING);
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  useEffect(() => {
    api
      .fetchBlueprints()
      .then((fetchedBlueprints) => {
        setDataState(FetchState.FETCHED);
        setBlueprints(fetchedBlueprints);
      })
      .catch(() => {
        setDataState(FetchState.ERROR);
      });
  }, []);

  return (
    <>
      {dataState === FetchState.FETCHING && <Spinner />}
      {dataState === FetchState.FETCHED && (
        <BlueprintCardGrid
          blueprints={blueprints}
          userIsPremium={userIsPremium}
        />
      )}
      {dataState === FetchState.ERROR && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>Couldn't fetch blueprints.</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default HomePage;
