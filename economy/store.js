const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let timeout1 = 9140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))

        let presomax = new Discord.MessageEmbed()
            .setColor('#8B0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription(`Liberdade em: ${time.hours}h ${time.minutes}m e ${time.seconds}s`)

        return message.inlineReply(presomax)
    } else {

        let star = '<:NPoints:837666759389347910>'
        let loli = '<:Loli:831571527744356422>'
        let StarM = '<:starM:832974891635572787>'
        let loteria = db.get(`loteria`)

        let color = await db.get(`color_${message.author.id}`)
        if (color === null) color = '#6F6C6C'

        if (args[0] === 'vip') {

            const loja = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle('🏪 Lojinha VIP Raphy 24h')
                .setDescription('Aqui na Lojinha VIP, você pode comprar itens exclusivos que né... Só os vips podem.')
                .addFields(
                    {
                        name: 'Cores',
                        value: '🟥 `Vermelho` 10000 <:NPoints:837666759389347910>NPoints\n🟧 `Laranja` 10000 <:NPoints:837666759389347910>NPoints\n⬜ `Branco` 10000 <:NPoints:837666759389347910>NPoints'
                    },
                    {
                        name: 'Perfil',
                        value: '<:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787> `Estrela5` 10.000.000 <:NPoints:837666759389347910>NPoints'
                    }
                )
                .setFooter(`${prefix}buy | ${prefix}itens | ${prefix}setcolor | ${prefix}slot`)
            return message.inlineReply(loja)

        } else {

            const loja = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle('🏪 Lojinha Raphy 24h')
                .setDescription('Aqui na Lojinha Raphy, você pode comprar várias coisas para ter acesso a comandos e funções incriveis.')
                .addFields(
                    {
                        name: 'Disponiveis',
                        value: '🎣 `Vara de Pesca` 140 <:NPoints:837666759389347910>NPoints\n🔫 `Arma` 4.000 <:NPoints:837666759389347910>NPoints\n⛏️ `Picareta` 85 <:NPoints:837666759389347910>NPoints\n🪓 `Machado` 35 <:NPoints:837666759389347910>NPoints\n🎟️ `Fichas` 2 <:NPoints:837666759389347910>NPoints\n💌 `Carta de Amor` 1 <:NPoints:837666759389347910>NPoints\n🥘 `Comida` 2 <:NPoints:837666759389347910>NPoints\n🪱 `Isca` 1 <:NPoints:837666759389347910>NPoints\n🥤 `Água` 1 <:NPoints:837666759389347910>NPoints'
                    },
                    {
                        name: 'Loteria',
                        value: '🎫 `Ticket Loteria` 10 <:NPoints:837666759389347910>NPoints' + `\nPrêmio Atual: ${loteria} <:NPoints:837666759389347910>NPoints`
                    },
                    {
                        name: 'Perfil',
                        value: '<:starM:832974891635572787> `Estrela1` 500.000 <:NPoints:837666759389347910>NPoints\n<:starM:832974891635572787><:starM:832974891635572787> `Estrela2` 1.000.000 <:NPoints:837666759389347910>NPoints\n<:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787> `Estrela3` 2.000.000 <:NPoints:837666759389347910>NPoints\n<:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787><:starM:832974891635572787> `Estrela4` 4.000.000 <:NPoints:837666759389347910>NPoints\n🔰 `Título` 10.000<:NPoints:837666759389347910>NPoints'
                    }
                )
                .setFooter(`${prefix}buy | ${prefix}itens | ${prefix}vender | ${prefix}slot | ${prefix}loja vip`)
            return message.inlineReply(loja)

        }
    }
}