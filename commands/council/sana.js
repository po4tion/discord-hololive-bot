const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("사나")
    .setDescription("츠쿠모 사나의 방송"),
  async execute(interaction) {
    if (global.sana) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.sana}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("사나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
