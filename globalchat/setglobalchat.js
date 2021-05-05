const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) { return message.inlineReply('<:xis:835943511932665926> Permissão Necessária: Gerenciar Canais') }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const SetGlobalChatEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💬 Raphy Global Chat System')
        .setDescription('Fale com os outros servidores em um único chat. Isso é um experiência única!')
        .addField('Crie o canal', '`' + prefix + 'channel create text NomeDoCanalQueVocêQuer`')
        .addField('Valide o canal', '`' + prefix + 'setglobalchat #canal`')
        .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #canal`')

    if (!args[0]) { return message.inlineReply(SetGlobalChatEmbed) }

    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Por favor, marque apenas o canal **#canal**, nada além disso.') }

    if (args[0] === 'off') {
        let canal = db.get(`globalchat_${message.guild.id}`)
        if (canal === null) {
            let semcanal = new Discord.MessageEmbed()
                .setColor('#8B0000')
                .setTitle('O Global Chat já está desativado.')

            return message.inlineReply(semcanal)
        } else if (canal) {
            db.delete(`globalchat_${message.guild.id}`)
            let comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription(`${message.author}, desativou o Global Chat.`)
            return message.inlineReply(comcanal)
        }
    }

    const SemCanal = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Raphy Global Chat System')
        .setDescription('Este comando garante que ninguém use o comando `' + prefix + 'chat` fora do canal definido.')
        .addField('Crie o canal', '`' + prefix + 'channel create text NomeDoCanal`')
        .addField('Valide o canal', '`' + prefix + 'setglobalchat #canal`')

    let channel = message.mentions.channels.first()
    if (!channel) { return message.inlineReply(SemCanal) }

    let atual = db.get(`globalchat_${message.guild.id}`)
    if (channel.id === atual) {
        let iqual = new Discord.MessageEmbed()
            .setColor('#8B0000') // Red
            .setTitle('Este canal já foi definido como Chat Global!')

        return message.inlineReply(iqual)
    } else if (args[0] !== atual) {
        db.set(`globalchat_${message.guild.id}`, channel.id)

        setTimeout(function () {
            const sucess = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Global Chat System Ativado!')
                .setDescription(`Canal escolhido: ${channel}`)

            return message.inlineReply('<a:Check:836347816036663309> Autenticação finalizada.', sucess)
        }, 7000)
        return message.inlineReply(`<a:carregando:836101628083437608> Autenticando canal no banco de dados...`).then(msg => msg.delete({ timeout: 6900 }).catch(err => { return }))
    }
}