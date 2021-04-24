const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Transformice'
  var link1 = 'https://store.steampowered.com/app/335240/Transformice/'
  var link2 = 'https://www.transformice.com/'
  var st = 'Steam'
  var w = 'Microsoft Windows'
  var mc = 'MacOS'
  var nv = 'Navegador'

  var TFMEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${nv}`, `${link2}`)
    .setFooter(`Plataformas: ${w}, ${mc}`)
  return message.inlineReply(TFMEmbed)
}