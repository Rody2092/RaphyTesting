const db = require("quick.db")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    if (!args[0]) return message.inlineReply('Você não disse o Código #HEX')
    if (args[0].length > 7) return message.inlineReply('Maior que um código hex padrão.')
    if (args[0].length < 7) return message.inlineReply('Menor que um código hex padrão.')

    db.set(`color_${message.author.id}`, args[0])
    return message.inlineReply('OK!')
}