const blueprintsMock = require("./blueprints-mock");

const database = {
  blueprints: blueprintsMock,
};

module.exports = () => database;
