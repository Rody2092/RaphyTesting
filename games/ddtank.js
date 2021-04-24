const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Ddtank'
  var link1 = 'http://www.337.com/pt/ddtank/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}m ${li}, ${mc}`)
  return message.inlineReply(GameEmbed)
}