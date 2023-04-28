import BlueprintCard from "./BlueprintCard";

const HomePage = () => {
  return (
    <div>
      <BlueprintCard
        title="Terraform"
        description="Some description about terraform"
        author="Michael"
        version="20.32.12"
        lastUpdate="20.04.2023"
        premiumOnly={true}
        userIsPremium
      />
    </div>
  );
};

export default HomePage;
