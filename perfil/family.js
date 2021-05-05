const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('💖 Raphy Family System')
        .setDescription('Chame seus amigos mais próximos para sua familia.')
        .addFields(
            {
                name: 'Comandos de Convite - *Um para cada vaga no perfil.*',
                value: '`' + prefix + 'family1 @user`' + '`' + prefix + 'family2 @user`' + '`' + prefix + 'family3 @user`'
            },
            {
                name: 'Comando de Separação',
                value: '`' + prefix + 'nofamily1 @user`' + '`' + prefix + 'nofamily2 @user`' + '`' + prefix + 'nofamily3 @user`'
            }
        )
    return message.inlineReply(embed)
}