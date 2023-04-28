import { Blueprint } from "./BlueprintCard/types";
import BlueprintCardGrid from "./BlueprintCardGrid";

const blueprints: Blueprint[] = [
  {
    id: "1",
    name: "Terraform",
    description: "Some description about terraform",
    author: "Michael",
    version: "20.321.1",
    lastUpdate: "20.04.2023",
    premiumOnly: false,
  },
  {
    id: "2",
    name: "Drupal",
    description: "Some description about drupal",
    author: "Richard",
    version: "5.31.13",
    lastUpdate: "21.04.2023",
    premiumOnly: true,
  },
  {
    id: "3",
    name: "AWS",
    description: "Some description about AWS",
    author: "Raymund",
    version: "5.5.5",
    lastUpdate: "13.03.2023",
    premiumOnly: false,
  },
  {
    id: "4",
    name: "Kubernetes",
    description: "Some description about kubernetes",
    author: "Krzysztof",
    version: "15.32.7",
    lastUpdate: "20.04.2023",
    premiumOnly: true,
  },
];

const HomePage = () => {
  return <BlueprintCardGrid blueprints={blueprints} />;
};

export default HomePage;
