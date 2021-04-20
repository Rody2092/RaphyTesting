const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {

  var user = message.mentions.members.first() || message.author

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
  if (warnings === null) warnings = 0

  var warns = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${user.user.username} tem ${warnings} avisos.`)

  if (warnings === 1) {
    var w1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`${user.user.username} tem 1 aviso.`)
    return message.inlineReply(w1)
  }

  if (warnings === 0) {
    var w1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`${user.user.username} não tem avisos.`)
    return message.inlineReply(w1)
  }

  return message.inlineReply(warns)
}