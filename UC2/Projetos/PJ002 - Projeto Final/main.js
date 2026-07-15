const rls = require('readline-sync')
const { player, classes } = require('./player')
const { inventory, weapons, misc } = require('./inventario.js')

console.clear()
console.log('\n=== CRIAR PERSONAGEM ===\n')

// Sistema para dar o nome da máscara

player.nome = rls.question('Digite o seu nome: ')
console.log(`Acorde, ${player.nome}.`)

// Sistema de seleção de classe

while (player.classe == "") {
    console.clear()
    console.log(`
        Escolha uma classe:

        [1] - Guerreiro
        [2] - Mago
        [3] - Arqueiro
    `)

    console.log('Se eu pudesse ser um herói, eu seria...')
    player.classe = rls.questionInt()

    switch (player.classe) {
        case 1:
            player.classe = classes[0].nome
            player.hp = classes[0].hp
            player.maxhp = classes[0].hp
            player.atk = classes[0].atk
            break

        case 2:
            player.classe = classes[1].nome
            player.hp = classes[1].hp
            player.maxhp = classes[1].hp
            player.atk = classes[1].atk
            break   
        
        case 3:
            player.classe = classes[2].nome
            player.hp = classes[2].hp
            player.maxhp = classes[2].hp
            player.atk = classes[2].atk
            break
    
        default:
            player.classe = ""
    }
}

console.clear()
console.log(`\nEu acho que eu iria querer ser um ${player.classe}...`)
let menu = true
// Interface do usuário (UI)

while (menu) {
    console.log(`
        [1] - EXPLORAR
        [2] - VER STATUS
        [3] - INVENTÁRIO
        [4] - DESCANSAR
        [5] - SAIR
    `)

    let option = rls.keyIn('', {limit: '12345'})
    switch (option) {
        case 1:
            console.log("Explorando...")
        
        case 2:
            showStats()

        case 3:
            console.log("Vendo inventário...")

        case 4:
            console.log("Descansando...")

        case 5:
            console.log("Saindo...")
            menu = false
    }
}




// console.log(`NOME: ${player.nome}, O ${player.classe}    VIDA: ${player.hp}/${player.maxhp}`.toUpperCase())

// FUNÇÕES

function showStats() {
    console.clear()
    console.log(`
        === STATUS DO JOGADOR ===
        
          NOME:  ${player.nome}
        CLASSE:  ${player.classe}
          VIDA:  ${player.hp}/${player.maxhp}
        ATAQUE:  ${player.atk}
         NÍVEL:  ${player.lvl} (${player.exp})
         ITENS:  ${inventory.itemsOn}/${inventory.maxItemsOn}
    `)
}

function gameClear() {
    console.clear()
    console.log("Concluiu.")
}

function gameOver() {
    console.clear()
    console.log("Fim de jogo.")
}
