const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`family3_${message.author.id}`)) { return message.inlineReply("Você não tem um familiar nesta posição.") }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var user = message.mentions.members.first()

    if (!args[0]) { return message.inlineReply('Marque o seu familiar `' + prefix + 'nofamily3 @Familiar`') }
    if (args[1]) { return message.inlineReply(`<:xis:835943511932665926> Hey ${message.author}! Nada além do @user, por favor.`) }

    if (user.id !== db.get(`family3_${message.author.id}`)) { return message.inlineReply(`${user} não é seu familiar na posição 1.`) }

    await db.delete(`family3_${db.get(`family3_${message.author.id}`)}`)
    await db.delete(`family3_${message.author.id}`)
    setTimeout(function () { message.inlineReply(`<a:Check:836347816036663309> Você não tem mais parentesco com ${user}.`) }, 4650)
    return message.channel.send('<a:carregando:836101628083437608> Autenticando mudanças no banco de dados...').then(msg => msg.delete({ timeout: 4500 }).catch(err => { return }))
}