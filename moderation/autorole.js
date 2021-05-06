const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let role = db.get(`autorole_${message.guild.id}`)
    let role2 = db.get(`autorole2_${message.guild.id}`)

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const AutoroleEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Autorole System Status')
        .addFields(
            {
                name: 'Defina o cargo',
                value: '`' + prefix + 'setautorole @cargo`\n' + '`' + prefix + 'setautorole2 @cargo`',
                inline: true
            },
            {
                name: 'Desative o autorole',
                value: '`' + prefix + 'setautorole off`\n' + '`' + prefix + 'setautorole2 off`',
                inline: true
            }
        )
        .setFooter(`${prefix}help autorole`)
        
    if (!role2 && role) { AutoroleEmbed.setDescription(`Autorole 1: <@&${role}>\nAutorole 2: Desativado.`) }
    if (!role && role2) { AutoroleEmbed.setDescription(`Autorole 1: Desativado\nAutorole 2: <@&${role2}>`) }
    if (!role && !role2) { AutoroleEmbed.setDescription(`Autorole 1: Desativado.\nAutorole 2: Desativado.`) }
    if (role && role2) { AutoroleEmbed.setDescription(`Autorole 1: <@&${role}>\nAutorole 2: <@&${role2}>`) }
    return message.inlineReply(AutoroleEmbed)
}