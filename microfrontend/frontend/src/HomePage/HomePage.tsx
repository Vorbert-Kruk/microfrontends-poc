import { useEffect, useState } from "react";
import type { Blueprint } from "./types";
import BlueprintCardGrid from "./BlueprintCardGrid";
import { Alert, AlertDescription, AlertIcon, Spinner } from "@chakra-ui/react";
import api from "../api";

enum FetchState {
  "FETCHING",
  "FETCHED",
  "ERROR",
}

const HomePage = () => {
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
        <BlueprintCardGrid blueprints={blueprints} />
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
