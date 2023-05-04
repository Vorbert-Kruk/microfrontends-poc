import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
  opacity: 0.7;
  padding: 12px 16px;
  background-color: #f001;
  border: 1px solid red;
`;

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
        <ErrorMessage>
          Could not render microfrontend. For more details see the browser
          console.
        </ErrorMessage>
      );
    }
    return this.props.children;
  }
}

export default MicrofrontendErrorBoundary;
