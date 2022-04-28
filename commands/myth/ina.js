const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("이나")
    .setDescription("니노마에 이나니스의 방송"),
  async execute(interaction) {
    if (global.ina) {
      await interaction.reply(`https://www.youtube.com/watch?v=${global.ina}`);
    } else {
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("이나는 방송 중이지 않습니다.");

      await interaction.reply({ embeds: [embed] });
    }
  },
};
