const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let embeddetail = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('Comando Mute - Detalhes')
        .addFields(
            {
                name: '🔄 Atualize o Mute System',
                value: '1 - `-delrole @Muted` Delete o cargo.\n2 - `-mute` Ativa a configuração do cargo Mute.'
            },
            {
                name: '🆕 Novos canais de texto/voz',
                value: 'O Discord ainda não permite a auto atualização de roles.\nSempre que você criar um canal de texto/voz, atualize o mute da Naya para perfeito funcionamento.'
            },
            {
                name: '📑 Canal Log',
                value: 'Neste canal, mandarei todos os detalhes do mute. Você pode deixar este canal público ou privado alterando as permissões dele.\nClaro, não vá me privar dele, né?.'
            },
            {
                name: '⬆️ Naya Role',
                value: 'É extremamente importe que o meu cargo, "Naya" esteja acima de todas as outras roles, para que eu possa efetuar meus comandos com maestria.'
            }
        )
        .setTimestamp()
        .setFooter('Está mensagem será excluida em 1 minuto...')

    message.inlineReply(embeddetail)
}