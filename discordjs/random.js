const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let level = await db.fetch(`level_${message.author.id}`)
    if (level < 5) { return message.inlineReply('🚫 Libere este comando no level 5') }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    const linkserver = 'https://discord.gg/YpFWgJuuUV'
    const embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Raphy - Random  Result')
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
        .setFooter('Apoio Raphy - Developers')

    message.inlineReply(embed)
    setTimeout(function () { message.inlineReply("```js\n let resultado = ARRAY[Math.floor(Math.random() * ARRAY.length)]\n```") }, 1000)
}