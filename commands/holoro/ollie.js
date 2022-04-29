const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("올리")
    .setDescription("쿠레이지 올리의 방송"),
  async execute(interaction) {
    if (global.ollie) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.ollie}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("올리는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
