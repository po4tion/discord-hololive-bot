const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder().setName("ina").setDescription("이나의 방송 상태"),
  new SlashCommandBuilder()
    .setName("kiara")
    .setDescription("키아라의 방송 상태"),
  new SlashCommandBuilder().setName("gura").setDescription("구라의 방송 상태"),
  new SlashCommandBuilder().setName("calli").setDescription("칼리의 방송 상태"),
  new SlashCommandBuilder().setName("ame").setDescription("아메의 방송 상태"),
  new SlashCommandBuilder()
    .setName("irys")
    .setDescription("아이리스의 방송 상태"),
  new SlashCommandBuilder().setName("baelz").setDescription("땃쥐의 방송 상태"),
  new SlashCommandBuilder()
    .setName("fauna")
    .setDescription("파우나의 방송 상태"),
  new SlashCommandBuilder()
    .setName("kronii")
    .setDescription("크로니의 방송 상태"),
  new SlashCommandBuilder()
    .setName("mumei")
    .setDescription("무메이의 방송 상태"),
  new SlashCommandBuilder().setName("sana").setDescription("사나의 방송 상태"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
