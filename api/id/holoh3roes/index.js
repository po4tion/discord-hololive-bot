const { default: axios } = require("axios");
const { youtube_key } = require("../../../config.json");
const id = require("../../../assets/hololive-id.json");

exports.getZetaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.zeta,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getKaelaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.kaela,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getKoboState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.kobo,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};
