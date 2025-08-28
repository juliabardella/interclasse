// Cria o mundo temático de André Neves
player.onChat("start", function () {
    // Base
    blocks.fill(GRASS, pos(0, 0, 0), pos(30, 0, 30), FillOperation.Replace)

    // Estação 1: Matemática Afetiva
    blocks.fill(PLANKS_OAK, pos(2, 1, 2), pos(6, 3, 6), FillOperation.Replace)
    blocks.place(TORCH, pos(4, 4, 4))
    player.say("Estação 1 - Matemática Afetiva construída!")

    // Estação 2: Empatia e Inclusão
    blocks.fill(QUARTZ, pos(10, 1, 2), pos(14, 3, 6), FillOperation.Replace)
    blocks.place(TORCH, pos(12, 4, 4))
    player.say("Estação 2 - Empatia construída!")

    // Estação 3: Arte de Ensinar
    blocks.fill(BRICKS, pos(18, 1, 2), pos(22, 3, 6), FillOperation.Replace)
    blocks.place(TORCH, pos(20, 4, 4))
    player.say("Estação 3 - Arte de Ensinar construída!")

    player.say("Digite: neves1, neves2 ou neves3 para iniciar os desafios!")
})

// Estação 1 - Matemática Afetiva
player.onChat("neves1", function () {
    player.say("Pedro tinha 4 balas e ganhou mais 3 de sua amiga Ana. Quantas balas ele tem agora?")
    player.say("Digite: resposta1 <número>")
})

player.onChat("resposta1", function (resposta: number) {
    if (resposta == 7) {
        player.say("Muito bem! Você entendeu a importância da afetividade na matemática!")
        mobs.give(mobs.target(LOCAL_PLAYER), BOOK, 1)
    } else {
        player.say("Tente de novo. Lembre-se da amizade de Ana.")
    }
})

// Estação 2 - Empatia e Inclusão
player.onChat("neves2", function () {
    player.say("Você vê um colega com dificuldade em uma atividade. O que você faz?")
    player.say("Digite: resposta2 ajudar ou ignorar")
})

player.onChat("resposta2", function (resposta: any, _, __) {
    if (resposta.toLowerCase() == "ajudar") {
        player.say("Excelente! André Neves valorizava o cuidado e a inclusão.")
        mobs.give(mobs.target(LOCAL_PLAYER), BOOK, 1)
    } else {
        player.say("Pense de novo: como podemos ser mais empáticos?")
    }
})

// Estação 3 - A Arte de Ensinar
player.onChat("neves3", function () {
    player.say("Qual dessas atitudes é a mais eficaz para um bom professor?")
    player.say("Digite: resposta3 escutar, gritar ou ignorar")
})

player.onChat("resposta3", function (resposta: any, _, __) {
    if (resposta.toLowerCase() == "escutar") {
        player.say("Correto! Escutar é essencial na prática de ensino de André Neves.")
        mobs.give(mobs.target(LOCAL_PLAYER), BOOK, 1)
    } else {
        player.say("André Neves diria: ouvir é ensinar com o coração.")
    }
})
