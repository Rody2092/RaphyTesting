const Discord = require('discord.js')

exports.run = async (client, message, args) => {



  var list = [
    'https://imgur.com/LHYGFv9.gif',
    'https://imgur.com/nejyn8e.gif',
    'https://imgur.com/Iv7XODR.gif',
    'https://imgur.com/u941BDN.gif',
    'https://imgur.com/d8YJvYP.gif',
    'https://imgur.com/nVEwypw.gif',
    'https://imgur.com/35sscfQ.gif',
    'https://imgur.com/RjJTqRq.gif',
    'https://imgur.com/gtGkba6.gif'
  ]
  
  var rand = list[Math.floor(Math.random() * list.length)]
  var embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`Um pézinho pra você :thumbsup: ${message.author}`)
    .setImage(rand)
  await message.inlineReply(embed)
}