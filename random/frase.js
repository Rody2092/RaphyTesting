const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var list = [
        '⠀\nCreio no riso e nas lágrimas como antídotos contra o ódio e o terror. \n Charles Chaplin',
        '⠀\nSeja como for o que penses, creio que é melhor dizê-lo com boas palavras. \n William Shakespeare',
        '⠀\nEu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções. \n Pequena Sereia',
        '⠀\nPense no futuro, mas não deixe de viver o presente \n Rody#0002',
        '⠀\nNão creio, no sentido filosófico do termo, na liberdade do homem. Todos agem não apenas sob um constrangimento exterior mas também de acordo com uma necessidade interior. \n Albert Einstein',
        '⠀\nEu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos. \n Maquiavel',
        '⠀\nCreio que quase sempre é preciso um golpe de loucura para se construir um destino. \n Marguerite Yourcenar',
        '⠀\nCreio que tenho prova suficiente de que falo a verdade: a pobreza. \n Sócrates',
        '⠀\nPor mim, creio que estamos mortos há muito tempo: morremos no exato momento em que deixamos de ser úteis. \n Jean-Paul Sartre',
        '⠀\nCreio que a verdade é perfeita para a matemática, a química, a filosofia, mas não para a vida. Na vida contam mais a ilusão, a imaginação, o desejo, a esperança. \n Ernesto Sabato',
        '⠀\nCreio que o nosso Pai Celeste inventou o homem por estar desapontado com o macaco. \n Mark Twain',
        '⠀\nCreio que o homem sonha unicamente para não deixar de ver; pode acontecer que um dia jorre a luz interior em nós e nenhuma outra nos será mais necessária. \n Johann Goethe',
        '⠀\nEu creio haver corações que poderiam cortar diamantes. \n Emanuel Wertheimer',
        '⠀\nRealmente, não creio na alma humana, nem nunca cri. Tenho a convicção de que as pessoas são como as malas: cheias de coisas diversas, são expedidas, atiradas, empurradas, lançadas ao chão, perdidas e reencontradas, até que, por fim um Último Transportador as atira para o Último Comboio. \n Katherine Mansfield',
        '⠀\nSe acredito na vida após a morte? Não sei nem se acredito na vida antes da morte! Acho que acredito na morte durante a vida. \n Groucho Marx',
        '⠀\nAcho que não sei quem sou, só sei do que não gosto. \n Renato Russo',
        '⠀\nA garota que você engravida hoje, fez um aborto ontem. \n Gowther',
        '⠀\nHá pessoas que ficam com você quando sobra tempo, e há pessoas que arranjam tempo pra ficar com você. \nLucas - Luquisquiss'
    ]

    var rand = list[Math.floor(Math.random() * list.length)]
    let user = client.users.cache.get(args[0])

    var HelpEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .addFields(
            {
                name: 'Frase',
                value: (rand)
            })
    await message.inlineReply(HelpEmbed)
}