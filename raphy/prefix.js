const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let prefixembed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('ℹ️ Informações sobre Prefixo')
        .setDescription('Prefixo é o simbolo que você utiliza para executar um comando em um bot no Discord.\nExemplo: `' + prefix + 'prefix` ou `' + prefix + 'help`')
        .addFields(
            {
                name: '💡 Meus comandos de Prefix',
                value: '`' + prefix + 'setprefix` Escolha meu prefixo\n`' + prefix + 'resetprefix` Resete meu prefixo para `-`'
            }
        )

    return message.inlineReply(prefixembed)
}