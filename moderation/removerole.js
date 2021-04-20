const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let perms = message.member.hasPermission("MANAGE_ROLES")
    if (!perms) {
        var permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Roles (cargos)')
        return message.inlineReply(permss)
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        var adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
        return message.inlineReply(adm)
    }
    
    let user = message.mentions.members.first()
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!user) {
        var nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'removerole @user @cargo`')
        return message.inlineReply(nouser)
    }

    let role = message.mentions.roles.first()
    if (!role) {
        var norole = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'removerole @user @cargo`')
        return message.inlineReply(norole)
    }

    if (!user.roles.cache.has(role.id)) {
        var norole = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} não possui este cargo.`)
        return message.inlineReply(norole)
    }

    let linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'

    user.roles.remove(role).catch(err => {
        if (err) {
            var erro = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Um erro foi encontrado')
                .setDescription('\n \n`' + err + '`')
                .addFields(
                    {
                        name: 'Missing Permissions',
                        value: `Algum cargo de ${user} é maior que o meu.`,
                        inline: true
                    },
                    {
                        name: 'API Connect Problem Ask',
                        value: 'Tente novamente, o servidor reconectou.',
                        inline: true
                    },
                    {
                        name: 'Algum outro erro?',
                        value: `[Support Maya](${linksupport})`
                    }
                )

            message.inlineReply(erro)
        }
    })

    var sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`O cargo ${role} foi removido de ${user.user.username} com sucesso.`)
    return message.inlineReply(sucess)
}