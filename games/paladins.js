const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Paladins'
  var link1 = 'https://www.paladins.com/'
  var link2 = 'https://store.steampowered.com/app/444090/Paladins/'
  var st = 'Steam'
  var ps = 'Play Store'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var x = 'Xbox'
  var mc = 'MacOS'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: ${ps} 4, Nintendo Switch, ${x} One, ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}