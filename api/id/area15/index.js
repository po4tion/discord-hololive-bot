const { default: axios } = require("axios");
const { youtube_key } = require("../../../config.json");
const id = require("../../../assets/hololive-id.json");

exports.getAyundaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.ayunda,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getMoonaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.moona,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getAiraniState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: id.airani,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};
