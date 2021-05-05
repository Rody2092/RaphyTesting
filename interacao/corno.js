const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let num = Math.floor(Math.random() * 100) + 1
  let user = message.mentions.members.first()
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!user) { return message.inlineReply('`' + prefix + 'corno @user`') }
  if (user.id === '837147659898191902') { return message.inlineReply('Eu nunca namorei, então não tem como eu ser corna.') }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

  let CornoEmbed = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setTitle('🦌 Raphy Cornometro')
    .setDescription(`Pelo jeito de ${user}, posso dizer que é ${num}% corno.`)
  return message.inlineReply(CornoEmbed)
}