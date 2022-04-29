const {
  getAyundaState,
  getMoonaState,
  getAiraniState,
} = require("../api/id/area15");

async function getMyth() {
  const fetchAyunda = await getAyundaState().then((data) => data);
  const fetchMoona = await getMoonaState().then((data) => data);
  const fetchAirani = await getAiraniState().then((data) => data);

  global.ayunda = fetchAyunda;
  global.moona = fetchMoona;
  global.airani = fetchAirani;
}

module.exports = getMyth;
