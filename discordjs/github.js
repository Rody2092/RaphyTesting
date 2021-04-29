const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let gitlink = "https://github.com/rodycouto/Naya-GitHub.git"
    let linksupport = "https://docs.google.com/forms/d/e/1FAIpQLSeEMnYYmlaVv_nG4PBdPD8CA6Q-MdBi-9KW_xVrqjs2MG5AqQ/viewform?usp=sf_link"
    let gitdance = "https://imgur.com/C78LrtY.gif"

    let level = await db.fetch(`level_${message.author.id}`)
    if (level < 10) { return message.inlineReply('🚫 Libere este comando no level 10') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Repositório Naya no GitHub')
        .setDescription('Caso você queira acesso ao código fonte da Naya, ele está disponível no Github\n⠀⠀⠀⠀⠀⠀⠀⠀')
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
                name: 'Suporte Naya',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
        .setFooter('Apoio Naya - Developers')

    return message.inlineReply(embed)
}