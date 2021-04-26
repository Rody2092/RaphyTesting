const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var linksupport = 'https://discord.gg/TC26m4ZRV3'
    var linkservidor = 'https://discord.gg/YpFWgJuuUV'

    var Support = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Centralzinha de Suporte 💬')
        .setURL('https://discord.gg/TC26m4ZRV3')
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
                value: 'Rody#4191',
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