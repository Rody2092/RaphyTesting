const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        var adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        var permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Roles (cargos)')
        return message.inlineReply(permss)
    }

    let logchannel = db.get(`logchannel_${message.guild.id}`)
    if (logchannel === null) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var nolog = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Não há Canal Log registrado.')
            .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
        return message.inlineReply(nolog)
    }

    if (!client.channels.cache.get(logchannel)) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var nolog1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Parece que o canal log foi excluido.')
            .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
        return message.inlineReply(nolog1)
    }

    var member = message.mentions.members.first()
    if (!member) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        var nomember = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'unmute @user`')
        return message.inlineReply(nomember)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        var nomember = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'unmute @user`')
        return message.inlineReply(nomember)
    }

    var role = message.guild.roles.cache.find(role => role.name === 'Muted')

    if (!message.guild.roles.cache.find(role => role.name === 'Muted')) {
        var norole = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} não está mutado/a ou possui um cargo que eu não reconheço.`)
        return message.inlineReply(norole)
    }

    if (!member.roles.cache.has(role.id)) {
        var norole = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} não está mutado/a ou possui um cargo que eu não reconheço.`)
        return message.inlineReply(norole)
    }

    await member.roles.remove(role)

    var unmuteembed = new Discord.MessageEmbed()
        .setAuthor(`Sistema de Mute - ${member.guild.name}`)
        .setColor('GREEN')
        .addFields(
            {
                name: 'Usuário destumado',
                value: member.user.tag
            },
            {
                name: 'Autor/Moderador',
                value: message.author
            }
        )
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

    var sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${member.user.username} foi desmutado com sucesso.`)
        .setDescription(`Mais detalhes em ${client.channels.cache.get(logchannel)}`)
    message.inlineReply(sucess)
    client.channels.cache.get(logchannel).send(unmuteembed)
}