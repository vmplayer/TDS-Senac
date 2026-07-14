const rls = require('readline-sync')

console.log('=== CRIAR PERSONAGEM ===')

let player = [
    {
        nome: rls.question("Qual o nome do seu personagem?"),
        classe: ""
    }
]

endFn1 = false
while (endFn1 === false) {
    console.clear()
    console.log(`
        Selecione uma classe:

        [1] - Guerreiro
        [2] - Mago
        [3] - Arqueiro
        `)

    player.classe = rls.questionInt('Qual classe voce vai pegar?')

    switch (player.classe) {
        case 0:
            player.classe = guerreiro
            endFn1 = true
            break
        
        case 1:
            player.classe = mago
            endFn1 = true
            break   
        
        case 2:
            player.classe = arqueiro
            endFn1 = true
            break

        default:
            console.log("Coloque um valor válido")
    }
}
console.log(player['classe'])
