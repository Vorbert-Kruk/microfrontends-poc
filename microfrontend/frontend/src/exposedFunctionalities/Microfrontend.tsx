import HomePage from "../HomePage";
import type { HomePageProps } from "../HomePage";

export type MicrofrontendProps = HomePageProps;

const checkPropsValidity = ({ userIsPremium }: MicrofrontendProps): boolean => {
  if (userIsPremium === undefined || typeof userIsPremium !== "boolean") {
    return false;
  }

  return true;
};

const Microfrontend = ({ userIsPremium }: MicrofrontendProps) => {
  const propsAreValid = checkPropsValidity({ userIsPremium });

  if (!propsAreValid) {
    throw new Error(
      "Could not render microfrontend. Check if all required parameters are being passed."
    );
  }

  return <HomePage userIsPremium={userIsPremium} />;
};

export default Microfrontend;
