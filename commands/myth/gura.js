const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("구라")
    .setDescription("가우르 구라의 방송"),
  async execute(interaction) {
    if (global.gura) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.gura}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("구라는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
