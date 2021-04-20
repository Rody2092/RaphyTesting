const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        var list = [
                'https://imgur.com/jVL0mbR.gif',
                'https://imgur.com/TRHBCon.gif'
        ]

        var rand = list[Math.floor(Math.random() * list.length)]

        var embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setImage(rand)
        await message.inlineReply(embed)
}