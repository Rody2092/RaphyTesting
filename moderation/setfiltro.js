const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (!message.member.hasPermission('ADMINISTRATOR')) { return message.inlineReply('<:xis:835943511932665926> | Permissão necessária: Administrador') }
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) { return message.inlineReply('<:xis:835943511932665926> | Eu preciso da permissão "Gerenciar Mensagem" para executar está função.') }

    const NoArgs0 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🔇 Filtro contra palavrões')
        .setDescription('Com este comando você pode ativar/desativar o filtro contra palavrões no servidor. Eu vou apagar todas as mensagens que contenham palavras feias *(ou quase todas :p)*')
        .addField('Ative', '`' + prefix + 'setfiltro on`')
        .addField('Desative', '`' + prefix + 'setfiltro off`')

    if (!args[0]) { return message.inlineReply(NoArgs0) }
    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> | Por favor, nada além do comando.\nUse `' + prefix + 'setfiltro` para mais informações.') }

    let filtro = db.get(`nobadwords_${message.guild.id}`)

    if (['status', 'server'].includes(args[0].toLowerCase())) {
        if (filtro) {
            const StatusEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Status do Filtro contra palavrões')
                .setDescription('<a:Check:836347816036663309> Ativado')
            return message.inlineReply(StatusEmbed)
        } else {
            const StatusEmbed1 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Status do Filtro contra palavrões')
                .setDescription('<:xis:835943511932665926> Desativado')
            return message.inlineReply(StatusEmbed1)
        }
    }

    if (['on', 'ativar'].includes(args[0].toLowerCase())) {
        if (filtro) {
            return message.inlineReply('O filtro contra palavrões já está ativado.')
        } else {
            
            const confirm = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Confirmação...')
                .setDescription('<a:attention:836101248183959562> Você confirma a ativação do Filtro de Palavrões?\n**Este comando fará todas as mensagens com palavras feias serem deletadas...**')
                .setFooter('Cancelamento em 30 segundos.')

            return message.channel.send(confirm).then(msg => {
                msg.react('✅').catch(err => { return }) // Check
                msg.react('❌').catch(err => { return }) // X
                setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 30000)

                msg.awaitReactions((reaction, user) => {
                    if (message.author.id !== user.id) return

                    if (reaction.emoji.name === '✅') { // Sim
                        msg.delete().catch(err => { return })

                        setTimeout(function () {
                            db.set(`nobadwords_${message.guild.id}`, 'ON')
                            const OkEmbed = new Discord.MessageEmbed()
                                .setColor('GREEN')
                                .setTitle('<a:Check:836347816036663309> Filtro ativado com sucesso!')
                                .setDescription(`${message.author} ativou o filtro contra palavrões no servidor.`)
                            return message.inlineReply(OkEmbed)
                        }, 6100)
                        return message.inlineReply('<a:Pulse:839682326211854337> Autenticando ativação do filtro contra palavrões...').then(msg => msg.delete({ timeout: 6000 }).catch(err => { return }))
                    }

                    if (reaction.emoji.name === '❌') { // NPEmbed
                        msg.delete().catch(err => { return })
                        return message.channel.send('Comando cancelado')
                    }
                })
            })
        }
    }

    if (['off', 'desligar'].includes(args[0].toLowerCase())) {
        if (!filtro) {
            return message.inlineReply('O filtro contra palavrões já está desativado.')
        } else {
            setTimeout(function () {
                db.delete(`nobadwords_${message.guild.id}`)
                const OkEmbed1 = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('<a:Check:836347816036663309> Filtro desativado com sucesso!')
                    .setDescription(`${message.author} desativou o filtro contra palavrões no servidor.`)
                return message.inlineReply(OkEmbed1)
            }, 6100)
            return message.inlineReply('<a:Pulse:839682326211854337> Autenticando desativação do filtro contra palavrões...').then(msg => msg.delete({ timeout: 6000 }).catch(err => { return }))
        }
    }

}