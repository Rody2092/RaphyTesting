const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let level = await db.fetch(`level_${message.author.id}`)
    if (level < 10) { return message.inlineReply('🚫 Libere este comando no level 10') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    let linkserver = 'https://discord.gg/YpFWgJuuUV'
    const embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Raphy - CommandFile')
        .setDescription('Permite você usar comandos em outras pastas e diminuir o tamanho do index')
        .addFields(
            {
                name: 'Como usar',
                value: 'Coloque este código no index.',
                inline: true
            },
            {
                name: 'Quer um support?',
                value: `[Clique aqui](${linkserver})`,
                inline: true
            }
        )
        .setFooter('Apoio Raphy - Developers')

    message.inlineReply(embed)
    setTimeout(function () { message.inlineReply("```js\n    try {\n      const commandFile = require(`./NOME DA PASTA AQUI/${command}.js`)\n      commandFile.run(client, message, args)\n    } catch (err) { }\n```") }, 1000)
}