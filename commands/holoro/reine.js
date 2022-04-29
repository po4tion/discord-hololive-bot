const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("레이네")
    .setDescription("파볼리아 레이네의 방송"),
  async execute(interaction) {
    if (global.reine) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.reine}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("레이네는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
