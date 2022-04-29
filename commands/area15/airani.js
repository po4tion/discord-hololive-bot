const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아이라니")
    .setDescription("아이라니 이오피프틴의 방송"),
  async execute(interaction) {
    if (global.airani) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.airani}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아이라니는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
