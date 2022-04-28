const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("파우나")
    .setDescription("세레스 파우나의 방송"),
  async execute(interaction) {
    if (global.fauna) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.fauna}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아메는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
