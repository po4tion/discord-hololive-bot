const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, token } = require("./config.json");

const commands = [];

/* *
 * * EN
 */
const myth = fs
  .readdirSync("./commands/myth")
  .filter((file) => file.endsWith(".js"));

for (const file of myth) {
  const command = require(`./commands/myth/${file}`);
  commands.push(command.data.toJSON());
}

const hope = fs
  .readdirSync("./commands/hope")
  .filter((file) => file.endsWith(".js"));

for (const file of hope) {
  const command = require(`./commands/hope/${file}`);
  commands.push(command.data.toJSON());
}

const council = fs
  .readdirSync("./commands/council")
  .filter((file) => file.endsWith(".js"));

for (const file of council) {
  const command = require(`./commands/council/${file}`);
  commands.push(command.data.toJSON());
}

/* *
 * * ID
 */

const area15 = fs
  .readdirSync("./commands/area15")
  .filter((file) => file.endsWith(".js"));

for (const file of area15) {
  const command = require(`./commands/area15/${file}`);
  commands.push(command.data.toJSON());
}

const holoro = fs
  .readdirSync("./commands/holoro")
  .filter((file) => file.endsWith(".js"));

for (const file of holoro) {
  const command = require(`./commands/holoro/${file}`);
  commands.push(command.data.toJSON());
}

const holoh3roes = fs
  .readdirSync("./commands/holoh3roes")
  .filter((file) => file.endsWith(".js"));

for (const file of holoh3roes) {
  const command = require(`./commands/holoh3roes/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log("커맨드 등록 완료"))
  .catch(console.error);
