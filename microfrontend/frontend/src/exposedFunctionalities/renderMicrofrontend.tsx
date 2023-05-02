import React from "react";
import ReactDOM from "react-dom/client";
import Microfrontend from "./Microfrontend";
import type { MicrofrontendProps } from "./Microfrontend";

const renderMicrofrontend = (
  htmlContainerId: string,
  microfrontendProps: MicrofrontendProps
) => {
  const htmlContainer = document.getElementById(htmlContainerId);

  if (!htmlContainer) {
    throw Error(
      `HTML element with "${htmlContainerId}" could not be found. Please make sure that the container is accessible before rendering microfrontend.`
    );
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Microfrontend {...microfrontendProps} />
    </React.StrictMode>
  );
};

export default renderMicrofrontend;
