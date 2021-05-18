const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let gif = 'https://imgur.com/sFBDKCA.gif'
  let array1 = ["cara", "coroa"]
  let rand = Math.floor(Math.random() * array1.length)

  const embed = new Discord.MessageEmbed().setImage(gif)

  if (args[1]) {return message.inlineReply('<:xis:835943511932665926> | Apenas `cara` ou `coroa` meu anjo.')}

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply('<:xis:835943511932665926> | insira `cara` ou `coroa` na frente do comando.')
  }
  else if (args[0].toLowerCase() == array1[rand]) {
    message.inlineReply(embed).then(msg => msg.delete({ timeout: 4000 })).then(msg => message.inlineReply("Deu **" + array1[rand] + "**, você ganhou!"))
  }
  else if (args[0].toLowerCase() != array1[rand]) {
    message.inlineReply(embed).then(msg => msg.delete({ timeout: 4000 })).then(msg => message.inlineReply("Deu **" + array1[rand] + "**, você perdeu!"))
  }
}