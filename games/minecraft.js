const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  var game = 'Minecraft'
  var link1 = 'https://www.minecraft.net/pt-pt'
  var link2 = 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=pt'
  var ps = 'Play Store'
  var pt = 'PlayStation'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var nsw = 'Nintendo Switch'
  var x = 'Xbox'
  var mc = 'MacOS'
  var ios = 'iOS'
  var an = 'Android'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${li}, ${an}, ${ios}, ${x} 360/One, Raspberry Pi, Windows Phone, ${pt} 4/Vita, Wii U, tvOS, ${nsw}, New Nintendo 3DS`)
  return message.inlineReply(GameEmbed)
}