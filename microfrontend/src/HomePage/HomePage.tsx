import { Blueprint } from "./BlueprintCard/types";
import BlueprintCardGrid from "./BlueprintCardGrid";

const blueprints: Blueprint[] = [
  {
    id: "1",
    title: "Terraform",
    description: "Some description about terraform",
    author: "Michael",
    version: "20.321.1",
    lastUpdate: "20.04.2023",
    premiumOnly: false,
  },
  {
    id: "2",
    title: "Drupal",
    description: "Some description about drupal",
    author: "Richard",
    version: "5.31.13",
    lastUpdate: "21.04.2023",
    premiumOnly: true,
  },
  {
    id: "3",
    title: "AWS",
    description: "Some description about AWS",
    author: "Raymund",
    version: "5.5.5",
    lastUpdate: "13.03.2023",
    premiumOnly: false,
  },
  {
    id: "4",
    title: "Kubernetes",
    description: "Some description about kubernetes",
    author: "Krzysztof",
    version: "15.32.7",
    lastUpdate: "20.04.2023",
    premiumOnly: true,
  },
];

const HomePage = () => {
  return (
    <div>
      <BlueprintCardGrid blueprints={blueprints} />
    </div>
  );
};

export default HomePage;
