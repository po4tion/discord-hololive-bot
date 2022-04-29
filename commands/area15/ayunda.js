const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아윤다")
    .setDescription("아윤다 리스의 방송"),
  async execute(interaction) {
    if (global.ayunda) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.ayunda}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("아윤다 리스는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
