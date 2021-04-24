const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Haboo Hotel'
  var link1 = 'https://www.habbo.com.br/'
  var link2 = 'https://play.google.com/store/apps/details?id=air.com.sulake.habboair&hl=pt-br'
  var ps = 'Play Store'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'
  var nv = 'Navegador'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${nv}, ${an}, ${win}, ${ios}`)
  return message.inlineReply(GameEmbed)
}