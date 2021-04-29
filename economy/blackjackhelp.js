
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  const linkgit = 'https://github.com/rodycouto/NayaCommands/blob/main/Exemplos/comojogarbj.md'

  const help = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('♠️ ♥️ 21 Pontos - Blackjack ♣️ ♦️')
    .setDescription(`Olhe tudo sobe o Blackjack [cliquando aqui](${linkgit})`)
  return message.inlineReply(help)

}