const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var role = db.get(`autorole_${message.guild.id}`)
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (role) {
        var autoroleautal = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Autorole System está ativado')
            .setDescription(`Cargo atual: <@&${role}>`)
            .addFields(
                {
                    name: 'Mude o cargo',
                    value: '`' + prefix + 'setautorole @cargo`',
                    inline: true
                },
                {
                    name: 'Desative o autorole',
                    value: '`' + prefix + 'setautorole off`',
                    inline: true
                }
            )
            .setFooter(`${prefix}help autorole`)
        return message.inlineReply(autoroleautal)
    }

    if (role === null) {
        var autoroleautal = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Autorole System está desativado')
            .setDescription(`Cargo atual: Nenhum`)
            .addFields(
                {
                    name: 'Ative o autorole',
                    value: '`' + prefix + 'setautorole @cargo`',
                    inline: true
                }
            )
            .setFooter(`${prefix}help autorole`)
        return message.inlineReply(autoroleautal)
    }

}