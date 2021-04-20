const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        var permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: ADMINISTRADOR')
        return message.inlineReply(permss)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'deletarcomando NomeDoComando`')
            .addFields(
                {
                    name: 'Exemplo',
                    value: '`' + prefix + 'deletarcomando Sorvete`'
                }
            )
        return message.inlineReply(noargs)
    }

    let commandName = args[0].toLowerCase()
    let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
    if (database) {
        let data = database.find(x => x.name === commandName.toLowerCase())
        if (!data) {
            var noex = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Este comando não existe no meu banco de dados.')
            return message.inlineReply(noex)
        }

        let value = database.indexOf(data)
        delete database[value]

        var filter = database.filter(x => {
            return x != null && x != ''
        })

        db.set(`guildConfigurations_${message.guild.id}.commands`, filter)

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Comando `' + prefix + args[0] + '` deletado com sucesso!')

        return message.inlineReply(embed)
    }
    else {
        var nof = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Comando não encontrado')
        return message.inlineReply(nof)
    }
}