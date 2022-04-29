const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("카엘라")
    .setDescription("카엘라 코발스키아의 방송"),
  async execute(interaction) {
    if (global.kaela) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.kaela}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("카엘라는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
