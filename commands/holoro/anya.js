const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아냐")
    .setDescription("아냐 멜핏사의 방송"),
  async execute(interaction) {
    if (global.anya) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.anya}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아냐는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
