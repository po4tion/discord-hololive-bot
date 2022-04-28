const { getIrysState } = require("../api/en/hope");

async function getMyth() {
  const fetchIrys = await getIrysState().then((data) => data);

  global.irys = fetchIrys;
}

module.exports = getMyth;
