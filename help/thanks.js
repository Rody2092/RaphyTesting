const Discord = require("discord.js")

exports.run = async (client, message, args) => {

     let Thanks = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle(':hearts: OBRIGADA a todos que me ajuda a crescer! :hearts:')
          .setURL('https://github.com/rodycouto/RaphyCommands/blob/main/README.md#-raphy-assistence')
          .addFields(
               {
                    name: 'Listinha de pessoas que me ajuda',
                    value: '[Clique aqui pra ver a listinha](https://github.com/rodycouto/RaphyCommands/blob/main/README.md#-raphy-assistence)'
               }
          )
     return message.inlineReply(Thanks)
}