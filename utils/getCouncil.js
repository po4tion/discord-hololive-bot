const {
  getFaunaState,
  getBaelzState,
  getKroniiState,
  getMumeiState,
  getSanaState,
} = require("../api/en/council");

async function getCouncil() {
  const fetchBaelz = await getBaelzState().then((data) => data);
  const fetchFauna = await getFaunaState().then((data) => data);
  const fetchKronii = await getKroniiState().then((data) => data);
  const fetchMumei = await getMumeiState().then((data) => data);
  const fetchSana = await getSanaState().then((data) => data);

  global.baelz = fetchBaelz;
  global.fauna = fetchFauna;
  global.kronii = fetchKronii;
  global.mumei = fetchMumei;
  global.sana = fetchSana;
}

module.exports = getCouncil;
