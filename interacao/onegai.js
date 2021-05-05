const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let list = [
    'https://imgur.com/qERXcxZ.gif',
    'https://imgur.com/z8FmWuo.gif',
    'https://imgur.com/uzT4CTC.gif',
    'https://imgur.com/C4Lcets.gif',
    'https://imgur.com/UlMJxJP.gif',
    'https://imgur.com/osm4itQ.gif'
  ]

  let rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!user) { return message.inlineReply('`' + prefix + 'onegai @user`') }
  if (user.id === '837147659898191902') { return message.inlineReply('Porque imploras a mim?') }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  let avatar = message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setAuthor(`${message.author.username} esta implorando ${user.username}`, avatar)
    .setImage(rand)
  return message.inlineReply(embed)
}