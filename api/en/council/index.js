const { default: axios } = require("axios");
const { youtube_key } = require("../../../config.json");
const en = require("../../../assets/hololive-en.json");

exports.getBaelzState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.baelz,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getFaunaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.fauna,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getKroniiState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.kronii,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getMumeiState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.mumei,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};

exports.getSanaState = async () => {
  const result = await axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: youtube_key,
        part: "id",
        channelId: en.sana,
        formine: true,
        type: "video",
        eventType: "live",
      },
    })
    .then((res) => res.data.items[0]?.id?.videoId)
    .catch((err) => console.error(err));

  return result;
};
