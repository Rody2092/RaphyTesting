const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const GlobalChatEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Raphy Global Chat System')
        .setDescription('Fale com os outros servidores em um único chat. Isso é um experiência única!')
        .addField('Crie o canal', '`' + prefix + 'channel create text NomeDoCanal`')
        .addField('Valide o canal', '`' + prefix + 'setglobalchat #canal`')
        .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #canal`')

    return message.inlineReply(GlobalChatEmbed)
}