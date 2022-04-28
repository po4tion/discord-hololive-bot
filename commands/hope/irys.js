const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아이리스")
    .setDescription("IRyS의 방송"),
  async execute(interaction) {
    if (global.irys) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.irys}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("IRyS는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
