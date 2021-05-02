const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (message.author.id !== "451619591320371213") {
        message.delete().catch(err => { return })
        return message.inlineReply('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }
    
    let ServidoresAtivados = db.fetch(`globalchat_${message.guild.id}`)
    if (message.channel.id === ServidoresAtivados) {

        client.guilds.cache.forEach(Canal => {
            try {
                client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send('<a:carregando:836101628083437608> Reiniciando...')
            } catch (e) { return }
        })
    }

    client.user.setActivity(`Rebooting...`, { type: "WATCHING" })
    return message.inlineReply('<a:carregando:836101628083437608> Rebooting...')
}