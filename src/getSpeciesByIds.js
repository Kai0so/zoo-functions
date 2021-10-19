const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const findSpeciesById = ids.map((idToFind) => species.find((animal) => animal.id === idToFind));
  return findSpeciesById;
}

module.exports = getSpeciesByIds;
