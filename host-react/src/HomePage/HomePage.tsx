import { lazy, Suspense } from "react";
import MicrofrontendLoader from "./MicrofrontendLoader";
import MicrofrontendErrorBoundary from "./MicrofrontendErrorBoundary";
// TODO Norbert: Add loading state and error-catch mechanism
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
