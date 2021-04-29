const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_EMOJIS')) { return message.inlineReply('<:xis:835943511932665926> Permissão Necessária: Gerenciar Emojis') }
    if (!message.guild.me.permissions.has('MANAGE_EMOJIS')) { return message.inlineReply('<:xis:835943511932665926> Eu preciso da permissão "Gerenciar Emojis" para executar este comando.') }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const match = /<(a?):(.+):(\d+)>/u.exec(message.content)
    if (!match) { return message.reply('Hey! Adicione um emoji customizado! `' + prefix + 'addemoji SeuEmoji`') }

    // animados tem 'a' | NÃO animados tem  ''
    const [animated, name, id] = match
    const url = `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}`
    const nameid = `<:${name}:${id}>`

    message.guild.emojis.create(url, name)
    return message.channel.send('<a:Check:836347816036663309> Emoji adicionado!')
}