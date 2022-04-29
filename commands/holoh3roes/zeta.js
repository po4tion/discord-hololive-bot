const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("제타")
    .setDescription("베스티아 제타의 방송"),
  async execute(interaction) {
    if (global.zeta) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.zeta}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("제타는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
