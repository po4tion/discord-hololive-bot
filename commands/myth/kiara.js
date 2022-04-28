const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("키아라")
    .setDescription("타카나시 키아라의 방송"),
  async execute(interaction) {
    if (global.kiara) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.kiara}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("키아라는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
