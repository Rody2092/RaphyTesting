const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Brawlhalla'
  var link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
  var link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
  var st = 'Steam'
  var ps = 'Play Store'
  var pt = 'PlayStation'
  var w = 'Microsoft Windows'
  var nsw = 'Nintendo Switch'
  var xbo = 'Xbox One'
  var mc = 'MacOS'
  var ios = 'iOS'
  var an = 'Android'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
  return message.inlineReply(GameEmbed)
}