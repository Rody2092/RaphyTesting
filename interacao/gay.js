const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  var gif = 'https://imgur.com/8SbJOzL.gif'
  var num = Math.floor(Math.random() * 100) + 1

  var user = message.mentions.members.first()
  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    var nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'gay @user`')
    return message.inlineReply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.inlineReply('Eu não tenho gênero, eu acho.')
  }

  if (user.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }

  var rand = ['YELLOW', 'RED', 'GREEN', 'PURPLE']
  var calors = rand[Math.floor(Math.random() * rand.length)]

  var gay = new Discord.MessageEmbed()
    .setColor(calors)
    .setTitle('🏳️‍🌈 Maya Gaymometro')
    .setDescription(`Pela minha análise, ${user} é ${num}% gay.`)
  if (num > 80) {
    gay.setImage(gif)
  }
  return message.inlineReply(gay)
}