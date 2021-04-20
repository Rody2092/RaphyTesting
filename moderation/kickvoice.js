const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MOVE_MEMBERS')) {
        var noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Mover Membros')
        return message.reply(noperm)
    }

    if (!message.guild.me.hasPermission("MOVE_MEMBERS")) {
        var adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Mover Membros" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    var member = message.mentions.members.first()
    if (!member) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var nomember = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'kickvoice @user`')
        return message.inlineReply(nomember)
    }

    if (!member.voice.channel) {
        var novoice = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} não está em nenhum canal de voz.`)
        return message.inlineReply(novoice)
    }

    if (db.get(`whitelist_${member.id}`)) {// Rodrigo Couto
        var banrody = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(member.user.username + ' está na whitelist.')
        return message.inlineReply(banrody)
    }

    if (member.hasPermission(['MOVE_MEMBERS', 'ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANEGE_ROLES'])) {
        var perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} tem permissões importantes neste servidor.`)
        return message.inlineReply(perms)
    }

    var kicked = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${member.user.username} foi desconectado/a do canal de voz com sucesso.`)

    member.voice.kick().catch(err => {
        var error = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Um erro foi encontrado')
            .setDescription(`ERROR BY CONSOLE.LOG \n` + err)
        message.inlineReply(error)
    })

    return message.inlineReply(kicked)
}