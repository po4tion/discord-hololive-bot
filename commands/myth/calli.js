const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("칼리")
    .setDescription("모리 칼리오페의 방송"),
  async execute(interaction) {
    if (global.calli) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.calli}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("칼리는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
