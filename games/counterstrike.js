const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Counter-Strike: Global Offensive'
  var link1 = 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
  var st = 'Steam'
  var pt = 'PlayStation'
  var win = 'Microsoft Windows'
  var x = 'Xbox'
  var mc = 'MacOS'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${pt} 3/4, ${li}, ${x} 360`)
  return message.inlineReply(GameEmbed)
}