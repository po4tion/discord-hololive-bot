const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");
const {
  getCouncil,
  getMyth,
  getHope,
  getArea15,
  getHoloro,
  getHoloh3roes,
} = require("./utils");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  console.log("Ready!");
  await getCouncil();
  await getMyth();
  await getHope();
  await getArea15();
  await getHoloro();
  await getHoloh3roes();
});

client.commands = new Collection();

/* *
 * * EN
 */
const myth = fs
  .readdirSync("./commands/myth")
  .filter((file) => file.endsWith(".js"));

for (const file of myth) {
  const command = require(`./commands/myth/${file}`);

  client.commands.set(command.data.name, command);
}

const council = fs
  .readdirSync("./commands/council")
  .filter((file) => file.endsWith(".js"));

for (const file of council) {
  const command = require(`./commands/council/${file}`);

  client.commands.set(command.data.name, command);
}

const hope = fs
  .readdirSync("./commands/hope")
  .filter((file) => file.endsWith(".js"));

for (const file of hope) {
  const command = require(`./commands/hope/${file}`);

  client.commands.set(command.data.name, command);
}

/* *
 * * ID
 */
const area15 = fs
  .readdirSync("./commands/area15")
  .filter((file) => file.endsWith(".js"));

for (const file of area15) {
  const command = require(`./commands/area15/${file}`);

  client.commands.set(command.data.name, command);
}

const holoro = fs
  .readdirSync("./commands/holoro")
  .filter((file) => file.endsWith(".js"));

for (const file of holoro) {
  const command = require(`./commands/holoro/${file}`);

  client.commands.set(command.data.name, command);
}

const holoh3roes = fs
  .readdirSync("./commands/holoh3roes")
  .filter((file) => file.endsWith(".js"));

for (const file of holoh3roes) {
  const command = require(`./commands/holoh3roes/${file}`);

  client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.login(token);
