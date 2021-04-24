const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Among Us'
  var link1 = 'https://store.steampowered.com/app/945360/Among_Us/'
  var link2 = 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en'
  var st = 'Steam'
  var ps = 'Play Store'
  var win = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .addField('Among Us Gratis (pc)', 'https://discord.gg/CSAKXC6')
    .setFooter(`Plataformas: ${win}, ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}