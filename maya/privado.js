const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let PrivadoOff = db.get(`privadooff_${message.author.id}`)

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Mensagens no Privado')
        .setDescription('Com este comando, você escolhe se recebe ou não mensagens minha no seu privado.')
        .addField('Comando', '`' + prefix + 'privado on/off`')
        .addField('Veja seu Status', '`' + prefix + 'privado status`')
        .setFooter('Na ativação deste comando, você desabilitará alguns comandos e não poderá usa-los')

    if (!args[0]) { return message.inlineReply(embed) }
    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Por favor, digite apenas o comando. Informações adicionais podem estragar meu processamento.') }

    if (['on', 'ativar', 'ligar'].includes(args[0].toLowerCase())) {

        const confirm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Confirmação...')
            .setDescription('Você confirma em desabilitar minhas mensagens no seu privado?\n \nVocê confirmando esta ação, alguns comandos será desativado para você e você não receberá nenhuma mensagem minha no seu privado.')
            .setFooter('Auto delete em 1 minuto.')

        await message.inlineReply(confirm).then(msg => {
            msg.react('✅').catch(err => { return }) // Check
            msg.react('❌').catch(err => { return }) // X
            setTimeout(function () { msg.delete({ timeout: 60000 }).catch(err => { return }) })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete().catch(err => { return })

                    if (!PrivadoOff) {
                        setTimeout(function () { return message.inlineReply('<a:Check:836347816036663309> Suas mensagens no privado já estão ativadas. `' + prefix + 'privado` para mais informações.') }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608>').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }

                    if (PrivadoOff) {
                        setTimeout(function () {
                            db.set(`privadooff_${message.author.id}`, "OFF")
                            return message.inlineReply('<a:Check:836347816036663309> Você desabilitou minhas mensagens no seu privado com sucesso!')
                        }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608>').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete().catch(err => { return })
                    message.inlineReply("<a:Check:836347816036663309> Comando cancelado.")
                }
            })
        })
    } else if (['off', 'desativar', 'desligar'].includes(args[0].toLowerCase())) {

        const confirm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Confirmação...')
            .setDescription('Você confirma em habilitar minhas mensagens no seu privado?\n \nVocê confirmando esta ação, comandos será ativado para você e você receberá mensagens minhas no seu privado. *(Tudo opicional)*')
            .setFooter('Auto delete em 1 minuto.')

        await message.inlineReply(confirm).then(msg => {
            msg.react('✅').catch(err => { return }) // Check
            msg.react('❌').catch(err => { return }) // X
            setTimeout(function () { msg.delete({ timeout: 60000 }).catch(err => { return }) })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete().catch(err => { return })

                    if (!PrivadoOff) {
                        setTimeout(function () {
                            return message.inlineReply('<a:Check:836347816036663309> Você habilitou minhas mensagens no seu privado com sucesso!')
                        }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608>').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }

                    if (PrivadoOff) {
                        setTimeout(function () {
                            db.delete(`privadooff_${message.author.id}`)
                            return message.inlineReply('<a:Check:836347816036663309> Suas mensagens no privado já estão desativadas. `' + prefix + 'privado` para mais informações.')
                        }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608>').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete().catch(err => { return })
                    message.inlineReply("<a:Check:836347816036663309> Comando cancelado.")
                }
            })
        })
    }
}