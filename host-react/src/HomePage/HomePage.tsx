import { lazy, Suspense } from "react";
// TODO Norbert: Add loading state and error-catch mechanism
const BlueprintsMicrofrontend = lazy(
  () => import("blueprintsMicrofrontend/Microfrontend")
);

const HomePage = () => {
  // TODO Norbert: Add loading state
  return (
    // TODO Norbert: Add error handling state via Error Boundary
    // https://vhudyma-blog.eu/lazy-loading-in-react-with-react-lazy-and-suspense/
    <Suspense fallback={<div>Loading ...</div>}>
      <BlueprintsMicrofrontend userIsPremium />
    </Suspense>
  );
};

export default HomePage;
