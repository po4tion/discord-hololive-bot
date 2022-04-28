const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("벨즈")
    .setDescription("하코스 벨즈의 방송"),
  async execute(interaction) {
    if (global.baelz) {
      await interaction.reply(
        `https://www.youtube.com/watch?v=${global.baelz}`
      );
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("벨즈는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
