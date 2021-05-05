const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let list = [
    'https://imgur.com/l5xFcJ2.gif',
    'https://imgur.com/YoFsXOx.gif',
    'https://imgur.com/HNxV16F.gif',
    'https://imgur.com/6S5hxRr.gif',
    'https://imgur.com/MwOIxKg.gif',
    'https://imgur.com/1DV1Aix.gif',
    'https://imgur.com/HaPqlac.gif'
  ]

  let rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first()

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"
  
  if (!user) { return message.reply('`' + prefix + 'olhar @user`') }
  if (user.id === '837147659898191902') { return message.inlineReply('O que foi que eu fiz? o-o') }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  let avatar = message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

  let embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setAuthor(`${message.author.username} estou de olho em você ${user.username}`)
    .setImage(rand)
  return message.inlineReply(embed)
}