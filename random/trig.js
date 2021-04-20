const Discord = require('discord.js')
const canvacord = require('canvacord')

exports.run = async (client, message, args) => {



    message.inlineReply("Carregando...").then(m => m.delete({ timeout: 5000 }))
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    message.inlineReply("Carregando...").then(m => m.delete({ timeout: 5000 })).then(msg => message.inlineReply(attachment))
}