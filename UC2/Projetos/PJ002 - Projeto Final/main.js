const rls = require('readline-sync')
const { player, classes } = require('./playerSystem.js')
const { inventory, initItem, maxItems, weapons, misc } = require('./inventoryManager.js')
const { enemies } = require('./enemiesSystem.js')

const cores = {
    white: "\x1b[37m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    reset: "\x1b[0m"
}

// Funções do menu e configurações básicas 

function nameMask() {
    player.nome = rls.question('Digite o seu nome: ')
    console.log(`Acorde, ${player.nome}.`)
}

function classSelect() {
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
}

function menu() {
    let menu = true

    while (menu) {
        console.clear()        
        console.log(`
             === AÇÕES ===

            [1] - EXPLORAR
            [2] - VER STATUS
            [3] - INVENTÁRIO
            [4] - DESCANSAR
            [5] - LOJA
            [6] - CONQUISTAS
            [7] - SAIR
        `)

        let option = rls.keyIn('', {limit: '1234567'})
        switch (option) {
            case '1':
                explore()
                break

            case '2':
                showStats()
                break

            case '3':
                openInventory()
                break

            case '4':
                rest()
                break

            case '5':
                market()
                break

            case '6':
                achievements()
                break
            
            case '7':
                console.log("Saindo...")
                menu = false
        }
    }
}

function explore() {
    console.clear()
    console.log("Explorando...")

    let itemReceived = Math.floor(Math.random() * 8)

    switch (itemReceived) {
        case 0:
            console.log("A sua busca foi inútil.")
            break
        
        case 1:
            addItem(itemReceived)
            break

        case 2:
            addItem(itemReceived)
            break
        
        case 3:
            addItem(itemReceived)
            break
        
        case 4:
            addItem(itemReceived)
            break
        
        case 5:
            addItem(itemReceived)
            break
        
        case 6:
            addItem(itemReceived)
            break
        
        case 7:
            addItem(itemReceived)
            break
    }

    console.log('[ESPAÇO] Voltar')
    rls.keyIn('', { limit: ' ' })
}

function addItem(i) {
    if (inventory.length < maxItems) {
        if (i === 0) {
            console.log("A sua busca foi apenas perca de tempo.")
            player.blood -= 20
        } else if (i >= 1 && i < 6) {
            inventory.push(weapons[i - 1].nome)
            player.blood -= 10
            console.log(weapons[i - 1].nome)
        } else if (i >= 6 && i < 8) {
            inventory.push(misc[i - 6].nome)
            player.blood -= 10
            console.log(misc[i - 6].nome)
        }
    } else {
        console.log("Meu corpo não aguenta mais que isso. Não.")
    }
}

function showStats() {
    console.clear()
    console.log(`
        === STATUS DO JOGADOR ===
        
          NOME:  ${player.nome}
        CLASSE:  ${player.classe}
          VIDA:  ${player.hp}/${player.maxhp}
        ATAQUE:  ${player.atk} (+ATK DA ARMA (EXTRA))
         NÍVEL:  ${player.lvl}
        SANGUE:  ${player.blood}
         ITENS:  ${inventory.length}/20

        [ESPAÇO] Voltar à página principal
    `)

    rls.keyIn('', { limit: ' ' })
}

function openInventory() {
console.clear()
    console.log("       === INVENTÁRIO ===\n")

    inventory.forEach((item, i) => {
        if (weapons) {
            cores.red
            console.log(`       [${i + 1}] - ${item} [${inventory[i].type}]`)
            cores.reset
        } else if (misc) {
            cores.green
            console.log(`       [${i + 1}] - ${item} [${inventory[i].type}]`)
            cores.reset
        }
    });

    console.log("\n       [ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function rest() {
    console.clear()
    console.log("Descansando...")
    player.blood += 15

    console.log("\n[ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function market() {
    console.clear()
    console.log("Entrando no mercado...")

    console.log("[ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function achievements() {
    console.clear()
    console.log("Visualizando conquistas")

    console.log("[ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

// Combate


// Finalizações

function gameClear() {
    console.clear()
    console.log("Concluiu.")
}

function gameOver() {
    console.clear()
    console.log("Fim de jogo.")
}

// Execução do código 

console.clear()
console.log('\n=== CRIAR PERSONAGEM ===\n')

nameMask() // Chama a função de criar o nome da máscara
classSelect() // Chama a função de selecionar a classe da máscara

console.clear()
console.log(`\nEu acho que eu iria querer ser um ${player.classe}...`)

menu() // Chama a função de inicializar o menu
