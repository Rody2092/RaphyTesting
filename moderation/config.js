const Discord = require("discord.js")
const db = require("quick.db")
let linkgit = 'https://github.com/rodycouto/RaphyCommands/blob/main/README.md#%EF%B8%8F-comandos-administrativos'

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let configuração = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Configurações Disponiveis (opicional)')
        .setDescription(`Para informações mais detalhadas, acesse os [comandos administrativos](${linkgit})\n \n` + '`' + prefix + 'setwelcome` Canal de mensagem de boas vindas\n`' + prefix + 'setlink on/off` Sistema Ant Link\n`' + prefix + 'setwelcomemsg` Escolha a mensagem\n`' + prefix + 'setleave` Canal de saida\n`' + prefix + 'setleavemsg` Escolha a mensagem\n`' + prefix + 'setxpchannel` Canal de Level up\n`' + prefix + 'setreportchannel` Canal para receber reports\n`' + prefix + 'setideiachannel` Canal de ideias\n`' + prefix + 'setlogchannel` Canal log de ações mod\n`' + prefix + 'setautorole` Autorole normal\n`' + prefix + 'setpescachannel` Canal de pesca\n`' + prefix + 'setminechannel` Canal para minerar\n`' + prefix + 'setbuscachannel` Digite `' + prefix + 'floresta` para entender melhor')
    return message.inlineReply(configuração)
}