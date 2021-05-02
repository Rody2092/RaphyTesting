const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let canal = client.channels.cache.get('833670563301556235')

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let mensagem = args.join(" ")

    let noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<:pikachu:833378638291271680> teve uma ideia daora?')
        .setDescription('Com este comando, você manda sua ideia direto pro meu servidor pro pessoal votar, você também pode entrar usando `' + prefix + 'help`.')
        .addField('Requisitos', `**NADA** pornografico ou de cunho criminoso.\nPara mandar um gif é **${prefix}gif**\nFale bem a sua ideia para todos entenderem\nSua ideia contém imagem? Manda com um link.`)
        .addField('Comando exemplo', '`' + prefix + 'ideinaya Que tal colocar um comando em que todos podem dar suas ideias pra Naya?`')
        .addField('Comando exemplo com imagem', '`' + prefix + 'ideinaya Que tal colocar um comando em que todos podem dar suas ideias pra Naya? https://linkdaimagem.com`')
        .setFooter('Limite de 150 caracteres.')

    if (!args[0]) { return message.inlineReply(noargs) }

    let newideia = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Nova Ideia Recebida')
        .addField('Enviado por', `${message.author.tag} *(${message.author.id})*`, true)
        .addField('Servidor', message.guild.name, true)
        .addField('Sugestão', mensagem)


    if (mensagem.length < 10) { return message.inlineReply('Por favor, escreva mais de 10 caracteres.') }
    if (mensagem.length > 150) { return message.inlineReply('Por favor, não ultrapasse mais de 150 caracteres.') }

    canal.send(newideia)
    setTimeout(function () { message.inlineReply('<a:Check:836347816036663309> ideia enviada com sucesso!') }, 4100)
    return message.inlineReply('<a:carregando:836101628083437608> Enviando sua ideia ao Servidor Central...').then(msg => msg.delete({ timeout: 4000 }))
}