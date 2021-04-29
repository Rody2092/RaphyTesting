const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let gif = 'https://imgur.com/8SbJOzL.gif'
  let num = Math.floor(Math.random() * 100) + 1

  let user = message.mentions.members.first()
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!user) { return message.inlineReply('`' + prefix + 'gay @user`') }
  if (user.id === '821471191578574888') { return message.inlineReply('Eu não tenho gênero, eu acho.') }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

  let rand = ['YELLOW', 'RED', 'GREEN', 'PURPLE']
  let calors = rand[Math.floor(Math.random() * rand.length)]

  let gay = new Discord.MessageEmbed()
    .setColor(calors)
    .setTitle('🏳️‍🌈 Naya Gaymometro')
    .setDescription(`Pela minha análise, ${user} é ${num}% gay.`)
  if (num > 80) { gay.setImage(gif) }
  return message.inlineReply(gay)
}