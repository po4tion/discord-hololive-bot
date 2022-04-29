const {
  getOllieState,
  getAnyaState,
  getReineState,
} = require("../api/id/holoro");

async function getMyth() {
  const fetchOllie = await getOllieState().then((data) => data);
  const fetchAnya = await getAnyaState().then((data) => data);
  const fetchReine = await getReineState().then((data) => data);

  global.ollie = fetchOllie;
  global.anya = fetchAnya;
  global.reine = fetchReine;
}

module.exports = getMyth;
