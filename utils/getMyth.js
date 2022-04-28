const {
  getAmeState,
  getCalliopeState,
  getGuraState,
  getInaState,
  getKiaraState,
} = require("../api/en/myth");

async function getMyth() {
  const fetchAme = await getAmeState().then((data) => data);
  const fetchCalli = await getCalliopeState().then((data) => data);
  const fetchGura = await getGuraState().then((data) => data);
  const fetchIna = await getInaState().then((data) => data);
  const fetchKiara = await getKiaraState().then((data) => data);

  global.ame = fetchAme;
  global.calli = fetchCalli;
  global.gura = fetchGura;
  global.ina = fetchIna;
  global.kiara = fetchKiara;
}

module.exports = getMyth;
