const rls = require('readline-sync')
let { player, classes } = require('./playerSystem.js')
let { inventory, backpackLVL, initItem, maxItems, weapons, misc, addInitItem } = require('./inventoryManager.js')
let { enemies, activeEnemies } = require('./enemiesSystem.js')

let gameEnd = false // Variável para finalizar o jogo

// Cores que serão usadas para colorir o terminal
const cores = {
    gray: "\x1b[37m",
    white: "\x1b[37m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    reset: "\x1b[0m"
}

// Missões que o jogador precisa fazer para desbloquear as conquistas
let tasks = [
    {
        name: "O Caçador de Sombras", // Angra - The Shadow Hunter
        description: "Derrote uma Sombra.",
        completed: false
    },
    {
        name: "Cara de Pôquer", // Lady Gaga - Poker Face
        description: "Derrote um Mascarado.",
        completed: false
    },
    /*{
        name: "",
        description: "Derrote O Criador.",
        completed: false
    },
    {
        name: "",
        description: "Abra três baús.",
        completed: false
    },*/
    {
        name: "Ainda Vivo", // Portal 2 OST - Still Alive
        description: "Descanse 5 vezes.",
        completed: false
    },
    {
        name: "Fugitivo", // Bon Jovi - Runaway
        description: "Fuja uma vez.",
        completed: false
    }/*,
    {
        name: "Cabeça de lixo", // Alice in Chains - Junkhead
        description: "Compre algo no mercado.",
        completed: false
    },
    {
        name: "", 
        description: "Evolua de nível.",
        completed: false
    },
    {
        name: "",
        description: "Se cure uma vez.",
        completed: false
    }*/
]

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
        if (gameEnd) menu = false

        console.clear()        
        console.log(`
             === AÇÕES ===

            [1] - EXPLORAR
            [2] - VER STATUS
            [3] - INVENTÁRIO
            [4] - DESCANSAR
            [5] - LOJA
            [6] - MISSÕES E CONQUISTAS
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
                achieve()
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
INIMIGOS DERTD:  ${player.enemiesDefeated}

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
    })

    console.log("\n       [ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function rest() {
    let addBlood
    console.clear()
    addBlood = 7
    player.blood += addBlood
    player.restTimes++
    console.log("Finalmente em paz...")
    console.log(`[SISTEMA] Você dormiu e recebeu ${addBlood} de sangue.`)

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
    console.log("Visualizando missões e conquistas...")

    console.log(`       === CONQUISTAS === `)

    tasks.forEach((achievement, i) => {
        let achievementStatus 
        if (achievement.completed === false) {
            achievementStatus = "Não Alcançado!"
        } else {
            achievementStatus = "Alcançado!"
        }

        console.log(`
            [${i + 1}] - ${achievement.name}
            ${achievement.description}
            STATUS: ${achievementStatus.toUpperCase()}
        `)
    })

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
            [2] - CORRER
        `)

        console.log(`
        === STATUS DO INIMIGO === 
         Inimigo: ${enemy.nome}                
            Vida: ${enemy.hp}                       
          Defesa: ${enemy.def}                     
        
        === STATUS DO JOGADOR ===
            Nome: ${player.nome}
            Vida: ${player.hp}
          Defesa: ${player.def}
          `)

        let fightOption = rls.keyIn('', { limit: '123' })
        switch (fightOption) {
            case '1':
                hit(enemy)
                break
            
            case '2':
                if (run(enemy)) return
                break
        }
    }
}
/*
O jogador usa itens e se prepara >
O jogador ataca ataca >
O sistema verifica se o ataque é válido e a vida do inimigo >
SE o a vida for <= 0, ele elimina o inimigo, se for maior, o inimigo (sistema) ataca >
O sistema verifica se o ataque foi válido e a vida do jogador >
SE a vida for menor ou igual a 0, ele chama o fim do jogo (gameOver(id)), se for maior,
Ele retorna pra tela de seleção (primeira parte desse texto)
*/

function hit(enemy) {
    let playerDamage = Math.max(0, player.atk - enemy.def)
    enemy.hp -= playerDamage

    console.clear()
    if (playerDamage > 0) {
        console.log(`\nVocê atacou e tirou ${cores.red}${playerDamage}${cores.reset} de vida do ${enemy.nome}!`)
    } else {
        console.log(`\nSeu ataque nem arranhou a defesa do ${enemy.nome}...`)
    }

    // === CHECAGEM DO INIMIGO ===
    if (enemy.hp <= 0) {
        enemy.hp = 0
        console.log(`\nVocê derrotou o ${enemy.nome}!\n`)
        player.enemiesDefeated++
        player.enemiesDefType.push(enemy.type)
        return
    }

    // === CONTRA-ATAQUE DO INIMIGO ===
    let enemyDamage = Math.max(0, enemy.atk - player.def)
    player.hp -= enemyDamage

    if (enemyDamage > 0) {
        console.log(`Ai! Isso d- dó- dói tanto. Is- Maldito ${enemy.nome}. Maldi- Maldito!
            Acho que perdi uns ${enemyDamage} pontos de vida.`)
    } else {
        console.log(`Esse ${enemy.nome} errou o golpe. Isso foi por pouco.`)
    }

    // === CHECAGEM DO JOGADOR ===
    if (player.hp <= 0) {
        player.hp = 0
        console.log(`\nVocê não aguenta mais suportar essa dor...`)
        rls.keyInPause('Pressione [ESPAÇO]...')
        gameOver(0)
        console.log('\nPressione [ESPAÇO] para encerrar o jogo.')
    } else {
        console.log('\nPressione [ESPAÇO] para terminar o turno.')
    }

    
    rls.keyInPause('', { limit: ' ' })
}

function run(enemy) {
    if (Math.random() > 0.5) {
        console.log(`${cores.gray}*Ahh. Huff. Ahh.*${cores.reset} Eu... ${cores.gray}*Argh.*${cores.reset} Eu consegui fugir... ${cores.gray}*Argh*${cores.reset}`)
        player.hasEscaped++
        return true
    } else {
        console.log(`[${enemy.nome}] Você volta aqui!`)
        return false
    }
}

// Finalizações

function gameComplete() {
    console.clear()
    console.log("Final BOM")
    gameEnd = true
}

function gameOver(id) {
    console.clear()
    if (id === 0) {
        console.log("Final RUIM - 1")
        gameEnd = true
        return
    } else if (id === 1) {
        console.log("Final RUIM - 2")
        gameEnd = true
        return
    }
}

// Missões

function achieve() {
    if (player.enemiesDefType === "Sombra") {
        tasks[0].completed = true
    }

    if (player.enemiesDefType === "O Mascarado") {
        tasks[1].completed = true
    }

    // if (player.enemiesDefType === 'O Criador') {
    //     tasks[2].completed = true
    // }

    if (player.restTimes === '5') {
        tasks[2].completed = true
    }

    if (player.hasEscaped) {
        tasks[3].completed = true
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
