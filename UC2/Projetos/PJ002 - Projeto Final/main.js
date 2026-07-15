const rls = require('readline-sync')
const { player, classes } = require('./player')

console.log('=== CRIAR PERSONAGEM ===')

while (player.classe == "") {
    console.clear()
    console.log(`
        Escolha uma classe:

        [1] - Guerreiro
        [2] - Mago
        [3] - Arqueiro
        `)

    player.classe = rls.questionInt('Se eu pudesse ser um herói, eu seria...\n')

    switch (player.classe) {
        case 0:
            player.classe = classes[0].nome
            player.hp = classes[0].hp
            player.atk = classes[0].atk
            break
        
        case 1:
            player.classe = classes[1].nome
            player.hp = classes[1].hp
            player.atk = classes[1].atk
            break   
        
        case 2:
            player.classe = classes[2].nome
            player.hp = classes[2].hp
            player.atk = classes[2].atk
            break

        default:
            console.log("Coloque um valor válido")
    }
}
console.log(player['classe'])
