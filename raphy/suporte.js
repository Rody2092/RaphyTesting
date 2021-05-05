const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    let linksupport = 'https://discord.gg/YpFWgJuuUV'
    let linkservidor = 'https://discord.gg/YpFWgJuuUV'

    let Support = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Centralzinha de Suporte 💬')
        .setURL('https://discord.gg/YpFWgJuuUV')
        .setDescription('A Central de Suporte consegue atender a qualquer problema ou crítica que você tenha :heart:')
        .setThumbnail('https://imgur.com/KyjyfRg.gif')
        .addFields(
            {
                name: 'Discord Server',
                value: `[Clique aqui](${linkservidor})`,
                inline: true
            },
            {
                name: 'Desenvolvedor',
                value: 'Rody#1000',
                inline: true
            },
            {
                name: 'Central de Suporte',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
    return message.inlineReply(Support)
}