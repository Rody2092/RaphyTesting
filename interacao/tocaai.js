const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let list = [
    'https://imgur.com/ox15B5R.gif',
    'https://imgur.com/vpv5tE0.gif',
    'https://imgur.com/JpMuTSR.gif',
    'https://imgur.com/95fpU14.gif',
    'https://imgur.com/bldOqvZ.gif',
    'https://imgur.com/KMkPmla.gif',
    'https://imgur.com/lq36NgR.gif',
    'https://imgur.com/arQzBcL.gif',
    'https://imgur.com/JoLapZ3.gif',
    'https://imgur.com/Jz4722z.gif'
  ]

  let list1 = [
    'https://imgur.com/ox15B5R.gif',
    'https://imgur.com/vpv5tE0.gif',
    'https://imgur.com/JpMuTSR.gif',
    'https://imgur.com/95fpU14.gif',
    'https://imgur.com/bldOqvZ.gif',
    'https://imgur.com/KMkPmla.gif',
    'https://imgur.com/lq36NgR.gif',
    'https://imgur.com/arQzBcL.gif',
    'https://imgur.com/JoLapZ3.gif',
    'https://imgur.com/Jz4722z.gif'
  ]

  let rand = list[Math.floor(Math.random() * list.length)]
  let rand1 = list1[Math.floor(Math.random() * list1.length)]
  let user = message.mentions.users.first()

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!user) { return message.inlineReply('`' + prefix + 'highfive @user`') }

  if (user.id === '837147659898191902') {

    let embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`${message.author.username} & ${user.username} mandaram um HIGHFIVE!`)
      .setImage(rand)
    return message.inlineReply(embed1)
  }

  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`Highfive ${user}?`)
    .setFooter('Clique em 🔁 para aceitar o highfive')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} & ${user.username} mandaram um HIGHFIVE!`)
    .setImage(rand1)

  await message.inlineReply(embed).then(msg => {
    msg.react('🔁')
    setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 15000)
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        msg.delete().catch(err => { return })
        return message.inlineReply(embed2)
      }
    })
  })
}