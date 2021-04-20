const Discord = require('discord.js')
const fetch = require('node-fetch')
const translate = require('@iamtraction/google-translate')

exports.run = async (client, message, args) => {
    var data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

    var pt = 'pt'
    var text = `${data.slip.advice}`
    translate(`${data.slip.advice}`, { to: pt }).then(res => {
        var embed = new Discord.MessageEmbed()
            .setDescription(`${res.text}`)
            .setColor("BLUE")

        return message.inlineReply(embed)
    })
}