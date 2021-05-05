const Discord = require("discord.js")
const CantadasJson = require("./cantadas.json")

exports.run = async (client, message, args) => {

    const Cantadas = CantadasJson[Math.floor(Math.random() * CantadasJson.length)]

    const CantadasEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('❤️ Cantadas Raphy')
        .setDescription(Cantadas)

    return message.inlineReply(CantadasEmbed)
}