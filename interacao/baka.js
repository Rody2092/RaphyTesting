const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let list = [
    'https://imgur.com/RMxwAN7.gif',
    'https://imgur.com/I6bM3F2.gif',
    'https://imgur.com/7AN8gxW.gif',
    'https://imgur.com/JYAnfnN.gif',
    'https://imgur.com/zVyWqbV.gif',
    'https://imgur.com/xQogwUe.gif',
    'https://imgur.com/1mtbsEI.gif'
  ]

  let avatar = message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
  let rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])

  if (!user) { return message.reply('Hey, quem você quer chamar de baka? `-baka @user`') }

  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  
  let avatar1 = client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

  const Embed = new Discord.MessageEmbed()
    .setColor('#EE00FF')
    .setDescription('Você que é baka!')
    .setThumbnail(avatar1)
    .setImage('https://imgur.com/scWqe1q.gif')

  if (user.id === '837147659898191902') { return message.inlineReply(Embed) }

  let color = await db.get(`color_${message.author.id}`)
  if (color === null) color = '#6F6C6C'

  const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(`${message.author.username} chamou ${user.username} de baka`, avatar)
    .setImage(rand)
  await message.inlineReply(embed)
}