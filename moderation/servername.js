const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) { return message.inlineReply('<:xis:835943511932665926> Permissão Necessária: Gerenciar Servidor') }
    if (!message.guild.me.hasPermission('MANAGE_GUILD')) { return message.inlineReply('<:xis:835943511932665926> Permissão Necessária: Gerenciar Servidor') }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const NoArgs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<a:engrenagem:836101651331940383> Mude o nome do Servidor')
        .setDescription('Com este comando, você muda o nome do servidor sem precisar ficar entrando nas configurações do servidor.')
        .addField('Comando', '`' + prefix + 'servername Novo nome do servidor`')

    let NovoNome = args.join(" ")
    if (!NovoNome) return message.inlineReply(NoArgs)
    if (NovoNome < 2) { return message.inlineReply('<:xis:835943511932665926> O nome do servidor deve estar entre **2 a 100** caracteres.') }
    if (NovoNome > 100) { return message.inlineReply('<:xis:835943511932665926> O nome do servidor deve estar entre **2 a 100** caracteres.') }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Confirmação...')
        .setDescription(`<a:attention:836101248183959562> Alterar o nome do servidor de **${message.guild.name}** para **${NovoNome}**`)
        .setFooter('Cancelamento em 30 segundos.')

    message.inlineReply(confirm).then(msg => {
        msg.react('✅').catch(err => { return }) // Check
        msg.react('❌').catch(err => { return }) // X
        setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 30000)

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // home
                msg.delete().catch(err => { return })

                message.guild.setName(NovoNome).catch(err => { return message.channel.send(`**ERRO:** ${err}`) })
                return message.inlineReply(`<a:Check:836347816036663309> O nome do servidor foi alterado para **${NovoNome}**`)

            }
            if (reaction.emoji.name === '❌') {
                msg.delete().catch(err => { return })
                msg.channel.send('<a:Check:836347816036663309> Comando cancelado.')
            }
        })
    })
}