const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let level = await db.fetch(`level_${message.author.id}`)
    if (level < 20) {return message.inlineReply('🚫 Libere este comando no level 20')    }
    if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

    let linkserver = 'https://discord.gg/YpFWgJuuUV'
    const embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Raphy - Global Level System')
        .setDescription('Sistema de XP Global')
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
    setTimeout(function () { message.inlineReply("```js\n function xp(message) {\n            if (message) {\n                let xp = db.add(`xp_${message.author.id}`, 2)\n                let level = Math.floor(0.5 * Math.sqrt(xp))\n                let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1)\n                if (level > lvl) {\n                    let newLevel = db.set(`level_${message.author.id}`, level)\n                    let xpchannel = db.get(`xpchannel_${message.guild.id}`)\n                    if (xpchannel === null) { return }\n                    if (!db.get(`xpchannel_${message.guild.id}`)) { return false }\n                    if (client.channels.cache.get(xpchannel)) {\n                        const newlevel = new Discord.MessageEmbed()\n                            .setColor('GREEN')\n                            .setDescription(`:tada: ${message.author}, você subiu para o level ${newLevel}!`)\n                        client.channels.cache.get(xpchannel).send(newlevel)\n                    }\n                }\n            }\n        }\n```") }, 1000)
}