const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var level = await db.fetch(`level_${message.author.id}`)
    if (level < 5) { return message.inlineReply('🚫 Libere este comando no level 5') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    var linkserver = 'https://discord.gg/YpFWgJuuUV'
    var embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Maya - Random  Result')
        .setDescription('Consiga um resultado randomico (aleatório) dentro de um array')
        .addFields(
            {
                name: 'Como usar',
                value: 'Só implantar o código abaixo do seu array\ntroque o nome **ARRAY** pelo nome do seu Array',
                inline: true
            },
            {
                name: 'Quer um support?',
                value: `[Clique aqui](${linkserver})`,
                inline: true
            }
        )
        .setFooter('Apoio Maya - Developers')

    message.inlineReply(embed)
    setTimeout(function () { message.inlineReply("```js\n var resultado = ARRAY[Math.floor(Math.random() * ARRAY.length)]\n```") }, 1000)
}