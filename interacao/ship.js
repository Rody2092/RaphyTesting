const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first()

  if (!user) { return message.inlineReply("`-ship @user`") }
  if (user.id === '821471191578574888') { return message.inlineReply("Foi maaal, eu não tenho a capacidade de amar ninguém. (ainda)") }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

  let love = Math.random() * 100
  let loveIndex = Math.floor(love / 10)
  let loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
  let gif70 = 'https://imgur.com/zZLdONH.gif'
  let gif40 = 'https://imgur.com/jx3VwoC.gif'
  let gif00 = 'https://imgur.com/LOFGlt5.gif'

  const embed = new Discord.MessageEmbed()
    .setColor("RED")

  if (love > 70) {
    embed.setTitle('<:zeroheart:833378638475821088> Medidor de Amor Naya')
    embed.setThumbnail(gif70)
    embed.setDescription(`${user} & ${message.author}\nHuuum... Eu vejo futuro.\n${loveLevel}⠀${Math.floor(love)}% `)
  }

  if (love > 40 && love < 70) {
    embed.setTitle('<:zerocute:832643202321874956> Medidor de Amor Naya')
    embed.setThumbnail(gif40)
    embed.setDescription(`${user} & ${message.author}\nhmm... Ainda acho que pode sair algo.\n${loveLevel}⠀${Math.floor(love)}% `)
  }

  if (love < 40) {
    embed.setTitle('<:sleep:833378639302754354> Medidor de Amor Naya')
    embed.setThumbnail(gif00)
    embed.setDescription(`${user} & ${message.author}\n... Que pena.\n${loveLevel}⠀${Math.floor(love)}% `)
  }

  return message.inlineReply(embed)
}