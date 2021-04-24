const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Mobile Legends: Bang Bang'
  var link1 = 'https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en_US&gl=US'
  var link2 = 'https://apps.apple.com/us/app/mobile-legends-bang-bang/id1160056295'
  var ps = 'Play Store'
  var as = 'Apple Store'
  var ios = 'iOS'
  var an = 'Android'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .addField(`${as}`, `${link2}`)
    .setFooter(`Plataformas: ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}