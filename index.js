const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");
const { getCouncil, getMyth, getHope } = require("./utils");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  console.log("Ready!");
  await getCouncil();
  await getMyth();
  await getHope();

  console.log(global.irys);
});

client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/council")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/council/${file}`);

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
