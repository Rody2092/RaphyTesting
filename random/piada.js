const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var list = [
        'O que é um pontinho amarelo em cima do prédio?\n||Um Fandangos suicida||',
        'Por que ele um Doritos quer se matar?\n||Porque a casa dele é um saco||',
        'Por que o bombeiro não caminha?\n||Porque ele socorre||',
        'Por que o policial não usa sabão?\n||Porque ele prefere deter gente||',
        'Por que a estante não se move?\n||Porque ela é cômoda||',
        'Por que o caminhão de frigorífico não sobe a ladeira?\n||Porque elingüiça||',
        'Por que o motoboy foi demitido?\n||Porque não estava capacetado para o trabalho||',
        'Por que o cego é um bom pedreiro?\n||Porque ele apalpa toda a obra||',
        'O que acontece se você colocar uma lâmpada mágica dentro d\n||Sai um hidro-gênio||',
        'Por que a família do músico sente saudades dele?\n||Porque ele faz flauta||',
        'Por que o rádio não pode ter filhos?\n||Porque ele é stereo||',
        'Por que no exército não falta luz?\n||Porque todo cabo já foi soldado||',
        'Por que o bebê prestou queixa na delegacia?\n||Porque foi fraldado||',
        'Por que fizeram 3 furos na régua?\n||Porque medidas tinham que ser tomadas||',
        'Por que a mocinha não pode aproveitar a Black Friday?\n||Porque só tem promoção||',
        'Porque a Dona Florinda foi mal atendida no McDonalds?\n||Porque ela foi de Bobs||',
        'Por que dói mais tropeçar numa caixa de som?\n||Porque amplificador||',
        'Por que tem mulher que ri com comercial de remédio?\n||Porque o Ministério da Saúde a diverte||',
        'Por que as cartas sempre chegam nas operadoras de telefonia móvel?\n||Porque tem selo lá||',
        'Por que o terrorista não foi trabalhar?\n||Porque estava de atestado islâmico||',
        'Por que o petróleo foi ao psicólogo?\n||Porque estava no fundo do poço||',
        'Por que o vendedor de instrumentos musicais não pode xingar os outros?\n||Porque o que vende baixo não me atinge||',
        'Por que o caminhoneiro não pega mulher no deserto?\n||Porque é muita areia pro seu caminhão||',
        'Por que a loja de canivete faliu?\n||Porque só vendia afiado||',
        'Por que a faxineira não luta karatê?\n||Porque ela já luta capoeira||',
        'Por que o Gene Simmons criou uma banda?\n||Porque ele Kiss||',
        'Por que o contorcionista está sempre cansado?\n||Porque trabalha dobrado||',
        'Por que a fita isolante vence a fita crepe?\n||Porque é faixa preta||',
        'Por que a mulher bonita foi demitida do trabalho voluntário?\n||Porque ela não dava sopa pra ninguém||',
        'Por que a princesa Isabel usa cosméticos?\n||Pra tirar os escravos||',
        'Por que a mulher que revende cosméticos começou a roubar bancos?\n||Porque o creme não compensa.||',
        'Era uma vez um gato com 16 vidas...\n||Que foi atropelado por uma 4x4 e morreu.||',
        'O que é um pontinho vermelho que pula e dança na selva?\n||Um MORANGO-TANGO||',
        'O Draco Malfoy\n||E já voltou||',
        'Visitando os EUA fiquei impressionada com o nível da educação pública americana\n||Várias crianças de 3-4 anos já falando inglês||'
    ]

    var rand = list[Math.floor(Math.random() * list.length)]

    var PiadaEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Piadinha saindo do forno...')
        .setDescription(rand)
    await message.inlineReply(PiadaEmbed)
}