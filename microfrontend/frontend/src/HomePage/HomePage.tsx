import { useEffect, useState } from "react";
import { Blueprint } from "./BlueprintCard/types";
import BlueprintCardGrid from "./BlueprintCardGrid";
import { Alert, AlertDescription, AlertIcon, Spinner } from "@chakra-ui/react";

enum FetchState {
  "FETCHING",
  "FETCHED",
  "ERROR",
}

const HomePage = () => {
  const [dataState, setDataState] = useState<FetchState>(FetchState.FETCHING);
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  useEffect(() => {
    window
      .fetch("http://localhost:5901/blueprints")
      .then((data) => data.json())
      .then((fetchedBlueprints: Blueprint[]) => {
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
