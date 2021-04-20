const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/m8ZtlNO.gif',
    'https://imgur.com/umCms9c.gif',
    'https://imgur.com/3uMLnPC.gif',
    'https://imgur.com/Pobe6Lo.gif',
    'https://imgur.com/q1AQ4vD.gif',
    'https://imgur.com/kVSTKPb.gif',
    'https://imgur.com/duiXoPW.gif',
    'https://imgur.com/HshuBMF.gif',
    'https://imgur.com/b7cFfKJ.gif',
    'https://imgur.com/NWEGNSx.gif',
    'https://imgur.com/V90HGXk.gif',
    'https://imgur.com/4nyxMrc.gif',
    'https://imgur.com/fFliWDG.gif',
    'https://imgur.com/CdoJ8Ac.gif',
    'https://imgur.com/8tPxaFx.gif',
    'https://imgur.com/FjtrdCW.gif',
    'https://imgur.com/kWIeWwk.gif'
  ]

  var list1 = [
    'https://imgur.com/m8ZtlNO.gif',
    'https://imgur.com/umCms9c.gif',
    'https://imgur.com/3uMLnPC.gif',
    'https://imgur.com/Pobe6Lo.gif',
    'https://imgur.com/q1AQ4vD.gif',
    'https://imgur.com/kVSTKPb.gif',
    'https://imgur.com/duiXoPW.gif',
    'https://imgur.com/HshuBMF.gif',
    'https://imgur.com/b7cFfKJ.gif',
    'https://imgur.com/NWEGNSx.gif',
    'https://imgur.com/V90HGXk.gif',
    'https://imgur.com/4nyxMrc.gif',
    'https://imgur.com/fFliWDG.gif',
    'https://imgur.com/CdoJ8Ac.gif',
    'https://imgur.com/8tPxaFx.gif',
    'https://imgur.com/FjtrdCW.gif',
    'https://imgur.com/kWIeWwk.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  var rand1 = list1[Math.floor(Math.random() * list1.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    var nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'kill @user`')
    return message.reply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.inlineReply('Paaara, não tenta me matar! :cry:')
  }

  if (user.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  var embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está matando ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  var embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` e ${message.author.username} ESTÃO SE MATANDO!`, avatar1)
    .setImage(rand1)

  await message.inlineReply(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') { // Retribuiu
        reaction.users.remove()
        return message.inlineReply(embed2)
      }
    })
  })
}