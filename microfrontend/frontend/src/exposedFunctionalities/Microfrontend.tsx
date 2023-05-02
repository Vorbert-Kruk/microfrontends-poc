import HomePage from "../HomePage";
import type { HomePageProps } from "../HomePage";

export type MicrofrontendProps = HomePageProps;

// TODO Norbert: Add props validation
const Microfrontend = ({ userIsPremium }: MicrofrontendProps) => {
  return <HomePage userIsPremium={userIsPremium} />;
};

export default Microfrontend;
