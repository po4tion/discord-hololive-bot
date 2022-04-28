const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("크로니")
    .setDescription("오로 크로니의 방송"),
  async execute(interaction) {
    if (global.kronii) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.kronii}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("오로 크로니는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
