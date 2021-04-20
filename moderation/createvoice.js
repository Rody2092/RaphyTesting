const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        var adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        var perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.inlineReply(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Use o formato correto')
            .setDescription('`' + prefix + 'createvoice NomeDoCanal`')
        return message.inlineReply(noargs)
    }

    message.guild.channels.create(args.slice(0).join(" "), { type: 'voice' })

    var sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Canal criado com sucesso.')
    message.inlineReply(sucess)
}