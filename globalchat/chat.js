const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout1 = 120000
    let author1 = db.fetch(`globaltiming_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))
        return message.channel.send(`<:xis:835943511932665926> Espere o sistema global esfriar os motores... ${time.minutes}m e ${time.seconds}s`)
    } else {

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        let CanalServer = message.guild.channels.cache.find(ch => ch.name === "naya-global-chat")
        if (!CanalServer) {

            const SetGlobalChatEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('💬 Naya Global Chat System')
                .setDescription('Fale com os outros servidores em um único chat. Isso é um experiência única!')
                .addField('Crie o canal', '`' + prefix + 'createchannel naya-global-chat`')
                .addField('Valide o canal', '`' + prefix + 'setglobalchat #naya-global-chat`')
                .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #naya-global-chat`')

            return message.channel.send('<:xis:835943511932665926> O canal Global Chat não existe neste servidor!', SetGlobalChatEmbed)
        }

        let CanalDoGlobalChat = db.get(`globalchat_${message.guild.id}`)

        const SemCanalDefinido = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📢 Naya Global Chat System')
            .setDescription('Com este comando, você consegue conversar com todos os servidores que eu estou.\nLinks não são permitidos.')
            .addField('Crie o canal', '`' + prefix + 'createchannel naya-global-chat`')
            .addField('Valide o canal', '`' + prefix + 'setglobalchat #canal`')
            .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #naya-global-chat`')

        if (CanalDoGlobalChat === null) { return message.channel.send('<:xis:835943511932665926> O canal não foi autenticado!', SemCanalDefinido) }

        let ConfirmaCanal = message.channel.id === db.get(`globalchat_${message.guild.id}`)
        if (!ConfirmaCanal) { return message.channel.send(`<:xis:835943511932665926> Este não é o Global Chat! Vem cá, é aqui: ${client.channels.cache.get(CanalDoGlobalChat)}`).then(msg => msg.delete({ timeout: 7000 }).catch(err => { return })) }

        if (!db.get(`globalchat_${message.guild.id}`)) {
            return message.channel.send('<:xis:835943511932665926> Parece que o Global Chat foi excluido... Use `' + prefix + 'setglobalchat` Para mais informações.')
        } else {

            function AchaLink(str) {
                let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                if (regexp.test(str)) { return true } else { return false }
            }

            let avatar = message.author.displayAvatarURL({ format: 'png' })
            let Mensagem = message.content.split(" ").slice(1)
            let MensagemGlobal = Mensagem.join(" ")

            if (!MensagemGlobal) return message.channel.send("<:xis:835943511932665926> Você precisa dizer algo para ser enviado no Global Chat.")
            if (MensagemGlobal > 150) { return message.channel.send('<:xis:835943511932665926> Heeey! A mensagem não pode ser maior que **150 caracteres**.') }
            if (MensagemGlobal < 10) { return message.channel.send('<:xis:835943511932665926> Heeey! A mensagem não pode ser menor que **10 caracteres**.') }
            if (AchaLink(MensagemGlobal) === true) { message.channel.send(`${message.author}, Por favor, não envie links no Global Chat.`) }

            return client.guilds.cache.forEach(guild => {

                if (guild == message.guild) return
                db.set(`globaltiming_${message.author.id}`, Date.now())
                let CanaisAllowed = guild.channels.cache.find(ch => ch.name === "naya-global-chat")

                if (!CanaisAllowed) return
                const GlobalChatEmbedMensagem = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setAuthor(`${message.author.tag} | ${message.author.id}`, avatar)
                    .setDescription(`🌐 Servidor: ${message.guild.name}\n\`\`\`txt\n${MensagemGlobal}\n\`\`\``)
                    .setTimestamp(Date.now())
                    .setFooter(`A Naya não se responsabiliza pelo conteúdo presente nesta mensagem.`)

                return CanaisAllowed.send(GlobalChatEmbedMensagem).then(() => message.channel.send(`<a:Check:836347816036663309> ${message.author}, sua mensagem foi enviada com sucesso!`, GlobalChatEmbedMensagem))
            })
        }
    }
}