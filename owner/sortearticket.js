const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    
    if (message.author.id !== "451619591320371213") {
        message.delete().catch(err => { return })
        return message.inlineReply('⚠️ Este comando é um restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('💰 Ticket Lotery Winner')
        .setDescription('Ticket Sorteando...')
        .addField('🎫 Ticket', '3514 - :id: A3F6-5C8S-84PF-PTDU\nTickets Comprados: LOCKED')
        .addField('🌐 Servidor', 'Servidor da Maya - :id: 830912111902982176')
        .addField('👤 Usuário', 'Makolpedro#8508 - :id: 351903530161799178')
        .addField('💸 Prêmio', `${db.get('loteria')} <:StarPoint:766794021128765469>MPoints`)
    return message.channel.send(embed)
}