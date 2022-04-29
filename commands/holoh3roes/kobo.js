const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("코보")
    .setDescription("코보 카나에루의 방송"),
  async execute(interaction) {
    if (global.kobo) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.kobo}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("코보는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
