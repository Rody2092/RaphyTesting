const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setDescription('❤️ [Me adicione com permissões de Administrador](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=8&scope=bot)\n \n❤️ [Me adicione com permissões customizadas](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=4294831607&scope=bot)')
    return message.inlineReply(`Obrigada por querer me adicionar no seu servidor.`, embed)
}