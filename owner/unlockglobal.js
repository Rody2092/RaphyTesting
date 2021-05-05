const db = require("quick.db")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    db.delete('lockglobal')
    message.inlineReply('Feito!')

    client.guilds.cache.forEach(Canal => {
        try {
            client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send(`🔓 O Canal Global foi aberto por ${message.author.tag}.`)
        } catch (e) { return }
    })
}