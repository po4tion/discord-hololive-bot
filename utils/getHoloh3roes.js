const {
  getZetaState,
  getKaelaState,
  getKoboState,
} = require("../api/id/holoh3roes");

async function getMyth() {
  const fetchZeta = await getZetaState().then((data) => data);
  const fetchkaela = await getKaelaState().then((data) => data);
  const fetchKobo = await getKoboState().then((data) => data);

  global.zeta = fetchZeta;
  global.kaela = fetchkaela;
  global.kobo = fetchKobo;
}

module.exports = getMyth;
