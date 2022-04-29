const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("무나")
    .setDescription("무나 호시노바의 방송"),
  async execute(interaction) {
    if (global.moona) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.moona}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("무나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
