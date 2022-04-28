const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아메")
    .setDescription("왓슨 아멜리아의 방송"),
  async execute(interaction) {
    if (global.ame) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.ame}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아메는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
