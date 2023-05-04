import { lazy, Suspense } from "react";
import MicrofrontendLoader from "./MicrofrontendLoader";
import MicrofrontendErrorBoundary from "./MicrofrontendErrorBoundary";

const BlueprintsMicrofrontend = lazy(
  () => import("blueprintsMicrofrontend/Microfrontend")
);

const HomePage = () => {
  return (
    <MicrofrontendErrorBoundary>
      <Suspense fallback={<MicrofrontendLoader />}>
        <BlueprintsMicrofrontend userIsPremium />
      </Suspense>
    </MicrofrontendErrorBoundary>
  );
};

export default HomePage;
