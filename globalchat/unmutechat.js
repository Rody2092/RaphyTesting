
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let formato = '`' + prefix + 'unmutechat ID`'

    let id = args[0]
    if (!id) { return message.inlineReply(formato) }
    if (args[0].length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
    if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Hey, isso não é um número.") }

    db.delete(`timemuteglobal_${id}`)
    db.delete(`muteglobal_${id}`)
    db.delete(`muteglobalchat_${id}`)

    let ServidoresAtivados = db.fetch(`globalchat_${message.guild.id}`)
    if (message.channel.id === ServidoresAtivados) {

        client.guilds.cache.forEach(Canal => {
            try {
                client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send(`📢 *(${id})* foi desmutado no chat global por ${message.author.tag}!`)
            } catch (e) { return }
        })
    }
}