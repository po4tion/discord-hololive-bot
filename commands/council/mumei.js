const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("무메이")
    .setDescription("나나시 무메이의 방송"),
  async execute(interaction) {
    if (global.mumei) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.mumei}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("무메이는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
