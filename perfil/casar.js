const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

	let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()
	let bot = member.bot

	let prefix = db.get(`prefix_${message.guild.id}`)
	if (prefix === null) prefix = "-"

	let color = await db.get(`color_${message.author.id}`)
	if (color === null) color = '#6F6C6C'

	if (!args[0]) {
		let noargs = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setTitle('💍 Casamento')
			.setDescription('Você pode se casar no Sistema Raphy. Siga o comando e se case. Veja também em `' + prefix + 'perfil`')
			.addFields(
				{
					name: 'Comando',
					value: '`' + prefix + 'marry @user`'
				}
			)
		return message.inlineReply(noargs)
	}

	let level = await db.get(`level_${member.id}`)
	if (level === null) level = 0

	if (level < 10) {
		let block = new Discord.MessageEmbed()
			.setColor('#8B0000')
			.setTitle('🚫  O casal precisa atingir o level 10')
		return message.inlineReply(block)
	}

	if (db.get(`marry_${message.author.id}`)) { return message.inlineReply("<:xis:835943511932665926> Você já está em um relacionamento sério, o que você quer por aqui?") }
	if (db.get(`marry_${member.id}`)) { return message.inlineReply(`<:xis:835943511932665926> ${member} está em um relacionamento.`) }
	if (!member) { return message.inlineReply(':question: Por favor mencione alguém para se casar.') }
	if (member.id === '837147659898191902') { return message.inlineReply('É... Não sei se meu pai me deixaria casar contigo. Acho melhor a gente ser apenas amigos. :)') }

	if (bot) { return message.inlineReply('Você não pode se casar com um bot.') }

	if (member.id === message.author.id) { return message.inlineReply('Você não pode se casar com você mesmo.') }

	const gif = 'https://imgur.com/Ush7ZDy.gif'
	const casar = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle('💍Novo Pedido de Casamento💍')
		.setDescription(`${message.author.username} está pedindo a mão de ${member.user.username} em casamento.\n\n${member}, você aceita se casar com ${message.author}?`)
		.setThumbnail(gif)
		.setFooter('Cancelamento em 1 minuto.')

	message.inlineReply(casar).then(msg => {
		msg.react('💍').catch(err => { return })
		setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 60000)

		let reactions = (reaction, user) =>
			reaction.emoji.name === '💍' && user.id === member.id

		let coletor = msg.createReactionCollector(reactions)

		coletor.on('collect', cp => {
			msg.delete().catch(err => { return })

			db.set(`marry_${message.author.id}`, member.id)
			db.set(`marry_${member.id}`, message.author.id)

			const casados = new Discord.MessageEmbed()
				.setColor('GREEN')
				.setTitle(':heart: Um novo casal acaba de se formar :heart:')
				.setDescription(`${member} aceitou o pedido de casamento de ${message.author}`)
			message.channel.send(casados)
		})
	})
}