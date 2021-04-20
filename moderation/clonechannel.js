const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        var perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.inlineReply(perms)
    }

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        var adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (args[0]) {
        var noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Utilize apenas `' + prefix + 'clonechannel` no canal em que deseja clonar.')
        return message.inlineReply(noargs)
    }

    var NomeDoCanal = message.channel.name
    message.guild.channels.create(NomeDoCanal, { type: 'text' })

    var sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Canal criado com sucesso.')
    message.inlineReply(sucess)
}