const Discord = require('discord.js')

exports.run = async (client, message, args) => {

     let Thanks = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle(':hearts: OBRIGADA a todos que me ajuda a crescer! :hearts:')
          .setURL('https://github.com/rodycouto/NayaCommands/blob/main/README.md#-naya-assistence')
          .addFields(
               {
                    name: 'Listinha de pessoas que me ajuda',
                    value: '[Clique aqui pra ver a listinha](https://github.com/rodycouto/NayaCommands/blob/main/README.md#-naya-assistence)'
               }
          )
     return message.inlineReply(Thanks)
}