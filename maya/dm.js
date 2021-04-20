const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Este comando está bloqueado sem previsão de volta')
        .setDescription('A equipe de proteção ao usuário do Discord pune os bots e os criadores por mensagens que não são rastreadas.\n \nUsuários costumam usar os bots com esses comandos para ofender e difamar pessoas anonimamente, sendo assim, o Discord desliga o bot e a conta do criador para sempre. \n \n> Por questão de segurança da Maya, este comando está bloqueado.')
        .setFooter('O comando correio está quase pronto.')
    return message.inlineReply(embed)
}