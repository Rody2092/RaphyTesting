const Discord = require('discord.js')
const canvacord = require('canvacord')

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' })
    let image = await canvacord.Canvas.trigger(avatar)
    let attachment = new Discord.MessageAttachment(image, "triggered.gif")
    message.inlineReply("<a:carregando:836101628083437608> Carregando...").then(m => m.delete({ timeout: 5000 })).then(msg => message.inlineReply(attachment))
}