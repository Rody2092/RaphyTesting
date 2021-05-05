const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed()
    .setColor('#D8901B')
    .setDescription('❤️ [Me adicione com permissões de Administrador](https://discord.com/api/oauth2/authorize?client_id=837147659898191902&permissions=8&scope=bot)\n \n❤️ [Me adicione com permissões customizadas](https://discord.com/api/oauth2/authorize?client_id=837147659898191902&permissions=4294967287&scope=bot)')
  return message.inlineReply(`Obrigada por querer me adicionar no seu servidor.`, embed)
}