const { Client, Intents, MessageEmbed } = require("discord.js");
const {
  getInaState,
  getKiaraState,
  getGuraState,
  getCalliopeState,
  getAmeState,
  getIrysState,
  getBaelzState,
  getFaunaState,
  getKroniiState,
  getMumeiState,
  getSanaState,
} = require("./api/holoEn");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ina") {
    const result = await getInaState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("이나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "kiara") {
    const result = await getKiaraState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("키아라는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "gura") {
    const result = await getGuraState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("구라는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "calli") {
    const result = await getCalliopeState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("칼리는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "ame") {
    const result = await getAmeState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아메는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "irys") {
    const result = await getIrysState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아이리스는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "baelz") {
    const result = await getBaelzState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("땃쥐는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "fauna") {
    const result = await getFaunaState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("파우나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "kronii") {
    const result = await getKroniiState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("크로니는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "mumei") {
    const result = await getMumeiState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("무메이는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === "sana") {
    const result = await getSanaState();

    if (result) {
      await interaction.reply(`https://www.youtube.com/watch?v=${result}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("사나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  }
});

client.login(token);
