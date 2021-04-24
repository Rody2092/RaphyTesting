const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'League of Legends'
  var link1 = 'https://na.leagueoflegends.com/pt-br/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}