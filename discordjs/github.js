const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let gitlink = "https://github.com/rodycouto/Bot-Raphy"
    let linksupport = "https://discord.gg/YpFWgJuuUV"
    let gitdance = "https://imgur.com/C78LrtY.gif"

    let level = await db.fetch(`level_${message.author.id}`)
    if (level < 10) { return message.inlineReply('🚫 Libere este comando no level 10') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Repositório Raphy no GitHub')
        .setDescription('Caso você queira acesso ao código fonte da Raphy, ele está disponível no Github\n⠀⠀⠀⠀⠀⠀⠀⠀')
        .setThumbnail(gitdance)
        .addFields(
            {
                name: 'Github',
                value: `[Clique aqui](${gitlink})`,
                inline: true
            },
            {
                name: 'Programador',
                value: 'Rody#1000',
                inline: true
            },
            {
                name: 'Suporte Raphy',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
        .setFooter('Apoio Raphy - Developers')

    return message.inlineReply(embed)
}