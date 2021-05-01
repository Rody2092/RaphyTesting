const Discord = require('discord.js')
const e = require('express')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const GlobalChatEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Naya Global Chat System')
        .setDescription('Fale com os outros servidores em um único chat. Isso é um experiência única!')
        .addField('Crie o canal', '`' + prefix + 'createchannel naya-global-chat`')
        .addField('Valide o canal', '`' + prefix + 'setglobalchat #naya-global-chat`')
        .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #naya-global-chat`')

    return message.inlineReply(GlobalChatEmbed)
}