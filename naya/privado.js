const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let PrivadoDesativado = db.get(`privadooff_${message.author.id}`)

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Mensagens no Privado')
        .setDescription('Com este comando, você escolhe se recebe ou não mensagens minha no seu privado.')
        .addField('Comando', '`' + prefix + 'privado on/off`')
        .addField('Veja seu Status', '`' + prefix + 'privado status`')
        .setFooter('Na ativação deste comando, você desabilitará alguns comandos e não poderá usa-los')

    if (!args[0]) { return message.inlineReply(embed) }
    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Por favor, digite apenas o comando. Informações adicionais podem estragar meu processamento.') }

    if (['off', 'desativar', 'desligar'].includes(args[0].toLowerCase())) {

        const confirm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('<a:carregando:836101628083437608> Confirmação...')
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

                    if (PrivadoDesativado) {
                        setTimeout(function () { return message.inlineReply('<a:Check:836347816036663309> Minhas mensagens no seu privado já estão desativadas.\nDigite `' + prefix + 'privado` para mais informações.') }, 4300)
                        return message.inlineReply('<a:carregando:836101628083437608> Autenticando alterações...').then(msg => msg.delete({ timeout: 4200 }).catch(err => { return }))
                    }

                    if (PrivadoDesativado === null) {
                        setTimeout(function () {
                            db.set(`privadooff_${message.author.id}`, "Desativado")
                            return message.inlineReply('<a:Check:836347816036663309> Você desativou minhas mensagens no seu privado com sucesso! Alguns comandos também foram bloqueados.')
                        }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608> Autenticando alterações...').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete().catch(err => { return })
                    message.inlineReply("<a:Check:836347816036663309> Comando cancelado.")
                }
            })
        })
    } else if (['on', 'ativar', 'ligar'].includes(args[0].toLowerCase())) {

        const confirm1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('<a:carregando:836101628083437608> Confirmação...')
            .setDescription('Você confirma em habilitar minhas mensagens no seu privado?\n \nVocê confirmando esta ação, comandos será ativado para você e você receberá mensagens minhas no seu privado. *(Tudo opicional)*')
            .setFooter('Auto delete em 1 minuto.')

        await message.inlineReply(confirm1).then(msg => {
            msg.react('✅').catch(err => { return }) // Check
            msg.react('❌').catch(err => { return }) // X
            setTimeout(function () { msg.delete({ timeout: 60000 }).catch(err => { return }) })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete().catch(err => { return })

                    if (PrivadoDesativado === null) {
                        setTimeout(function () { message.channel.send('<a:Check:836347816036663309> Minhas mensagens no seu privado já estão ativadas.\nDigite `' + prefix + 'privado` para mais informações.') }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608> Autenticando alterações...').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }

                    if (PrivadoDesativado) {
                        setTimeout(function () {
                            db.delete(`privadooff_${message.author.id}`)
                            message.inlineReply('<a:Check:836347816036663309> Você habilitou minhas mensagens no seu privado com sucesso!')
                        }, 6300)
                        return message.inlineReply('<a:carregando:836101628083437608> Autenticando alterações...').then(msg => msg.delete({ timeout: 6200 }).catch(err => { return }))
                    }
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete().catch(err => { return })
                    message.inlineReply("<a:Check:836347816036663309> Comando cancelado.")
                }
            })
        })
    } else if (['status'].includes(args[0].toLowerCase())) {
        let privado = db.get(`privadooff_${message.author.id}`)
        if (privado) { return message.inlineReply('Status: Desativado\nVocê **não recebe** mensagens minhas no seu privado') }
        if (privado === null) { return message.inlineReply('Status: Ativado\nVocê **recebe** mensagens minhas no seu privado') }
    }
}