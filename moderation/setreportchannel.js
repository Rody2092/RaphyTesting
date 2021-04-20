const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        var perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais, Manusear Mensagens')
        return message.inlineReply(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var noargs = new Discord.MessageEmbed()
            .setColor('BLUE') // red
            .setTitle(':loudspeaker: Sistema de Report')
            .setDescription('Com este comando, você ativará o meu sistema de report. Isso é bastante útil.')
            .addField('❓ O que é o sistema de report?', 'Com o meu sistema de report, os membros poderão reportar coisas ou outros membros de qualquer canal do servidor, não precisa está indo chamar mod/adm no privado para reportar.')
            .addField('❓ Como funciona?', 'Simples! o membro só precisa escrever `' + prefix + 'report blá blá blá` e o report será encaminhado para o canal definido. As mensagens serão deletadas na hora do envio, tornando o report anônimo e seguro, os únicos que verão o report, serão as pessoas que tem permissão para ver o canal definido.')
            .addField('Comando de Ativação', '`' + prefix + 'setreportchannel #Canal`')
            .addField('Comando de Desativação', '`' + prefix + 'setreportchannel off`')
            .setFooter('A Maya não se responsabiliza pelo conteúdo enviado atráves deste sistema.')
        return message.inlineReply(noargs)
    }

    if (['help', 'ajuda'].includes(args[0])) {
        var noargs = new Discord.MessageEmbed()
            .setColor('BLUE') // red
            .setTitle(':loudspeaker: Sistema de Report')
            .setDescription('Com este comando, você ativará o meu sistema de report. Isso é bastante útil.')
            .addField('❓ O que é o sistema de report?', 'Com o meu sistema de report, os membros poderão reportar coisas ou outros membros de qualquer canal do servidor, não precisa está indo chamar mod/adm no privado para reportar.')
            .addField('❓ Como funciona?', 'Simples! o membro só precisa escrever `' + prefix + 'report blá blá blá` e o report será encaminhado para o canal definido. As mensagens serão deletadas na hora do envio, tornando o report anônimo e seguro, os únicos que verão o report, serão as pessoas que tem permissão para ver o canal definido.')
            .addField('Comando de Ativação', '`' + prefix + 'setreportchannel #Canal`')
            .addField('Comando de Desativação', '`' + prefix + 'setreportchannel off`')
            .setFooter('A Maya não se responsabiliza pelo conteúdo enviado atráves deste sistema.')
        return message.inlineReply(noargs)
    }

    if (args[0] === 'off') {
        var canal = db.get(`reportchannel_${message.guild.id}`)
        if (canal === null) {
            var semcanal = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('O Report System já está desativado.')

            return message.inlineReply(semcanal)
        } else if (canal) {
            db.delete(`reportchannel_${message.guild.id}`)
            var desativado = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Report System desativado.')

            var desativando = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('🔄 Desativando Report System...')

            return message.channel.send(desativando).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(desativado))
        }
    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        var nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setDescription('`' + prefix + 'setreportchannel #Canal`')

        return message.inlineReply(nochannel)
    }

    var atual = db.get(`reportchannel_${message.guild.id}`)
    if (channel.id === atual) {

        var iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este canal já foi definido como Report Channel!')

        return message.inlineReply(iqual)
    } else if (args[0] !== atual) {
        db.set(`reportchannel_${message.guild.id}`, channel.id)

        var sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Report Channel Definido!')
            .setDescription(`Canal escolhido: ${channel}`)

        return message.inlineReply(sucess)
    }
}