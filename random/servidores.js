const Discord = require('discord.js')

exports.run = async (client, message, args) => {



    var Akatsuki = 'https://discord.gg/JMvXDZHG4H'
    var mk = 'https://discord.gg/mx8eMx6'

    var historys = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📝 Listinha de Servidores TOP\'s')
        .setDescription(`Envie seu servidor no [suporte](https://discord.gg/TC26m4ZRV3)`)
        .addFields(
            {
                name: 'Servidores Otakus',
                value: `[:cloud: AKATSUKI](${Akatsuki})`
            },
            {
                name: 'Servidores Super Automatizados',
                value: `[Mystic Kingdom](${mk})`
            }
        )
    return message.inlineReply(historys)
}