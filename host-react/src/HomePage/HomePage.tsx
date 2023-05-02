// TODO Norbert: Add loading state and error-catch mechanism
import BlueprintsMicrofrontend from "blueprintsMicrofrontend/Microfrontend";

const HomePage = () => {
  return (
    <div>
      <BlueprintsMicrofrontend userIsPremium />
    </div>
  );
};

export default HomePage;
