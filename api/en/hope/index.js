const { default: axios } = require("axios");
const { youtube_key } = require("../../../config.json");
const en = require("../../../assets/hololive-en.json");

exports.getIrysState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.irys,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};
