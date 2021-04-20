const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission(["MANAGE_ROLES"])) {
        var perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Cargos')
        return message.inlineReply(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.inlineReply(noargs)
    }

    let user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.inlineReply(nouser)
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if (warnings === null) {
        var nowa = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} não tem nenhum warn.`)
        return message.inlineReply(nowa)
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`)
    var sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`O warns de ${user.user.username} foi resatado com sucesso.`)
    message.inlineReply(sucess)
}