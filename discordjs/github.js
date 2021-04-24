const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var gitlink = "https://github.com/rodycouto/Maya-GitHub.git"
    var linksupport = "https://docs.google.com/forms/d/e/1FAIpQLSeEMnYYmlaVv_nG4PBdPD8CA6Q-MdBi-9KW_xVrqjs2MG5AqQ/viewform?usp=sf_link"
    var gitdance = "https://imgur.com/C78LrtY.gif"

    var level = await db.fetch(`level_${message.author.id}`)
    if (level < 10) { return message.inlineReply('🚫 Libere este comando no level 10') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    var embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Repositório Maya no GitHub')
        .setDescription('Caso você queira acesso ao código fonte da Maya, ele está disponível no Github\n⠀⠀⠀⠀⠀⠀⠀⠀')
        .setThumbnail(gitdance)
        .addFields(
            {
                name: 'Github',
                value: `[Clique aqui](${gitlink})`,
                inline: true
            },
            {
                name: 'Programador',
                value: 'Rody#4191',
                inline: true
            },
            {
                name: 'Suporte Maya',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
        .setFooter('Apoio Maya - Developers')

    return message.inlineReply(embed)
}