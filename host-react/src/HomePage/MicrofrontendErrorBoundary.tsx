import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface MicrofrontendErrorBoundaryProps {
  children: ReactNode;
}

interface MicrofrontendErrorBoundaryState {
  caughtError: boolean;
}

class MicrofrontendErrorBoundary extends Component<
  MicrofrontendErrorBoundaryProps,
  MicrofrontendErrorBoundaryState
> {
  public state: MicrofrontendErrorBoundaryState = {
    caughtError: false,
  };

  displayErrorDetails = (error: Error, errorInfo: ErrorInfo) => {
    console.error("Could not render microfrontend.", error, errorInfo);
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.displayErrorDetails(error, errorInfo);

    this.setState({ caughtError: true });
  }

  render() {
    if (this.state.caughtError) {
      return (
        <div>
          <h3>
            Could not render microfrontend, for more details see the browser
            console.
          </h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default MicrofrontendErrorBoundary;
