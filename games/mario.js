const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Mario'
  var link1 = 'https://store.nintendo.com.br/catalogsearch/result/?q=Mario'
  var link2 = 'https://play.google.com/store/search?q=Mario&c=apps&hl=en_US&gl=US'
  var ps = 'Play Store'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var nsw = 'Nintendo Switch'
  var mc = 'MacOS'
  var ios = 'iOS'
  var an = 'Android'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${nsw}, ${an}, ${ios}, ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}