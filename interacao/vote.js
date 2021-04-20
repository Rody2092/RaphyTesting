const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var content = args.join(' ')
    if (!content) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'votar O que você quer que seja votado.`')

        return message.inlineReply(noargs)
    }

    if (content) {
        var embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle(`Votação aberta por ${message.author.username}`)
            .setDescription(content)

        return message.inlineReply(embed).then(msg => {
            msg.react('👍').catch(err => { return })
            msg.react('👎').catch(err => { return })
        })
    }
}