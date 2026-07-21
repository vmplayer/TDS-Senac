const rls = require('readline-sync')
let { player, classes } = require('./playerSystem.js')
let { inventory, backpackLVL, initItem, maxItems, weapons, misc, addInitItem } = require('./inventoryManager.js')
let { enemies, activeEnemies } = require('./enemiesSystem.js')

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
                player.def = classes[0].def
                break

            case 2:
                player.classe = classes[1].nome
                player.hp = classes[1].hp
                player.maxhp = classes[1].hp
                player.atk = classes[1].atk
                player.def = classes[1].def
                break   
            
            case 3:
                player.classe = classes[2].nome
                player.hp = classes[2].hp
                player.maxhp = classes[2].hp
                player.atk = classes[2].atk
                player.def = classes[2].def
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

        let menuOption = rls.keyIn('', {limit: '1234567'})
        switch (menuOption) {
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
                console.clear()
                console.log("Saindo...")
                menu = false
        }
    }
}

function explore() {
    console.clear()
    console.log("Explorando...")

    let itemReceived = Math.floor(Math.random() * 11)

    if (itemReceived === 0) {
        console.log("A sua busca foi inútil.")
    } else if (itemReceived > 7) {
        fight(itemReceived)
    } else { 
        addItem(itemReceived) 
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
            inventory.push(weapons[i - 1])
            player.blood -= 10
            console.log(weapons[i - 1].nome)
        } else if (i >= 6 && i < 8) {
            inventory.push(misc[i - 6])
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
        DEFESA:  ${player.def}
         NÍVEL:  ${player.lvl}
        SANGUE:  ${player.blood}
         ITENS:  ${inventory.length}/${maxItems}
   NV. MOCHILA:  ${backpackLVL}

        [ESPAÇO] Voltar à página principal
    `)

    rls.keyIn('', { limit: ' ' })
}

function openInventory() {
console.clear()
    console.log("       === INVENTÁRIO ===\n")

    inventory.forEach((item, i) => {
        if (item.type === 'atk') {
            console.log(`       ${cores.red}[${i + 1}] - ${inventory[i].nome} [${inventory[i].type}]${cores.reset}`)
        } else if (item.type === 'misc') {
            console.log(`       ${cores.green}[${i + 1}] - ${inventory[i].nome} [${inventory[i].type}]${cores.reset}`)
        } else if (item.type === 'init') {
            console.log(`       ${cores.white}[${i + 1}] - ${inventory[i].nome} [${inventory[i].type}]${cores.reset}`)
        }
    });

    console.log("\n       [ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function rest() {
    let restLimit = 3
    let restRound
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

function fight(i) {
    i -= 8
    enemy = {...enemies[i]}

    console.clear()
    console.log(enemy)
    console.log("Lutando...")

    while(enemy.hp > 0 && player.hp > 0) {
        console.log(`
            === LUTA ===
            
            [1] - BATER
            [2] - ITENS
            [3] - CORRER
        `)

        console.log(`
        === STATUS DO INIMIGO ===
        Inimigo: ${enemy.nome}
        Vida: ${enemy.hp}
        Defesa: ${enemy.def}
        `)

        let fightOption = rls.keyIn('', { limit: '123' })
        switch (fightOption) {
            case '1':
                hit(enemy)
                break
            
            case '2':
                openInventory()
                break
            
            case '3':
                run()
                break
        }
    }

    console.log('[ESPAÇO] Voltar')
    rls.keyIn('', { limit: ' ' })
}

function hit(enemy) {

    let playerDamage = player.atk - enemy.def
    let enemyDamage = enemy.atk - player.def

    if (playerDamage > 0) {
        console.log(`Eu tirei ${cores.red}${playerDamage}${cores.reset} pontos de vida dele!`)
        enemy.hp -= playerDamage
        console.log(player.hp)
    } else {
        console.log()
    }

    if (enemyDamage > 0) {
        player.hp -= enemyDamage
    } else {
        console.log("Ele não conseguiu me bater...")
    }

    if (enemyDamage === 0 && playerDamage === 0) {
        console.log("E então os nossos ataques colidiram antes de se anularem entre si...")
    }

    if (enemy.hp <= 0) {
        enemy.hp = 0
        console.log(`Eu consegui... Eu derrotei esse ${enemy.nome}!`)
        return
    } else if (player.hp <= 0) {
        player.hp = 0
        console.log("Você morreu.")
        gameOver(0)
    }
}

// Finalizações

function gameComplete() {
    console.clear()
    console.log("Final BOM")
}

function gameOver(id) {
    console.clear()
    if (id === 0) {
        console.log("Final RUIM - 1")
    } else if (id === 1) {
        console.log("Final RUIM - 2")
    }
}

// Execução do código 

console.clear()
console.log('\n=== CRIAR PERSONAGEM ===\n')

nameMask() // Chama a função de criar o nome da máscara
classSelect() // Chama a função de selecionar a classe da máscara

console.clear()
console.log(`\nEu acho que eu iria querer ser um ${player.classe}...`)

addInitItem() // Adiciona os itens iniciais no inventário
menu() // Chama a função de inicializar o menu
