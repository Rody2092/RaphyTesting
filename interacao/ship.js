const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first()
  if (!user || message.author.id === user.id)
    return message.inlineReply("Você não pode fazer um Ship com você mesmo. Tenta assim `-ship @user`")

  if (user.id === '763072871597604874')
    return message.inlineReply("Foi maaal, eu não tenho a capacidade de amar ninguém. (ainda)")

  if (user.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }

  var love = Math.random() * 100
  var loveIndex = Math.floor(love / 10)
  var loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
  var avatar = message.author.displayAvatarURL({ format: 'png' })

  var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, avatar)
    .setColor("RED")
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .addField(`${user.user.username} ama você em:`, `💟 ${Math.floor(love)}% \n${loveLevel}`)

  return message.inlineReply(embed)
}