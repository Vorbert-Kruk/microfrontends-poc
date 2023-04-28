const { v4: uuid } = require("uuid");
const Chance = require("chance");

const random = new Chance();

const generateVersionNumber = (max) => random.natural({ min: 1, max: 30 });

const technologies = [
  "Terraform",
  "Drupal",
  "AWS",
  "Kubernetes",
  "Multi Cloud",
  "Helm",
  "K8S",
  "VMWare",
  "GCP",
  "MariaDB",
  "PostgreSQL",
  "MongoDB",
];

const blueprints = technologies.map((technology) => ({
  name: technology,
  id: uuid(),
  author: random.first(),
  description: `Some description about ${technology}.`,
  version: `${generateVersionNumber()}.${generateVersionNumber()}.${generateVersionNumber()}`,
  lastUpdate: random.date({ string: true, american: false, year: 2022 }),
  premiumOnly: random.bool(),
}));

module.exports = blueprints;
