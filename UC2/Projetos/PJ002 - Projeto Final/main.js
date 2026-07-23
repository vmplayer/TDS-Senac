// Bibliotecas e arquivos externos

const rls = require('readline-sync')
let { player, classes } = require('./playerSystem.js')
let { inventory, initItem, maxItems, weapons, misc, addInitItem, rmInitItem, rmItem, removeLastItem } = require('./inventoryManager.js')
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
    {
        name: "Ainda Vivo", // Portal 2 OST - Still Alive
        description: "Descanse 5 vezes.",
        completed: false
    },
    {
        name: "Fugitivo", // Bon Jovi - Runaway
        description: "Fuja uma vez.",
        completed: false
    },
    {
        name: "Vamos dizer pelo dia 9", // Alice in Chains - Sludge Factory
        description: "Conclua o jogo.",
        completed: false
    }
]

// Cadastro do jogador

function nameMask() {
    player.nome = rls.question('Digite o seu nome: ')
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
        player.classe = rls.keyIn('', { limit: '123'})

        switch (player.classe) {
            case '1':
                player.classe = classes[0].nome
                player.hp = classes[0].hp
                player.maxhp = classes[0].hp
                player.atk = classes[0].atk
                player.def = classes[0].def
            break

            case '2':
                player.classe = classes[1].nome
                player.hp = classes[1].hp
                player.maxhp = classes[1].hp
                player.atk = classes[1].atk
                player.def = classes[1].def
            break   
            
            case '3':
                player.classe = classes[2].nome
                player.hp = classes[2].hp
                player.maxhp = classes[2].hp
                player.atk = classes[2].atk
                player.def = classes[2].def
            break
        }
    }
}

// Menu principal

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
            [5] - MISSÕES E CONQUISTAS
            [6] - SAIR
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
                achieve()
                achievements()
            break

            case '6':
                console.clear()
                console.log("Saindo...")
                menu = false
            break
        }
    }
}

// Explorar

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

// Status do jogador

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
INIMIGOS DERTD:  ${player.enemiesDefeated}

        [ESPAÇO] Voltar à página principal
    `)

    rls.keyIn('', { limit: ' ' })
}

// Inventário e uso de itens

function openInventory() {
    console.clear()
    console.log("       === INVENTÁRIO ===\n")

    if (inventory.length === 0) {
        console.log("       Ta vazio...")
        console.log("\n       [ESPAÇO] Voltar")
        rls.keyIn('', { limit: ' ' })
        return
    }

    let count = {}
    let uniqueItems = []
    
    inventory.forEach(item => {
        if (!item) return

        if (!count[item.nome]) {
            count[item.nome] = { ...item, qtd: 1 }
            uniqueItems.push(item)
        } else {
            count[item.nome].qtd++
        }
    })

    let invIndex = 1
    for (let item of uniqueItems) {
        let cor = cores.white
        if (item.type === 'atk') cor = cores.red
        if (item.type === 'misc') cor = cores.green

        let qtdTexto = count[item.nome].qtd > 1 ? ` [x${count[item.nome].qtd}]` : ""
        console.log(`       ${cor}[${invIndex}] - ${item.nome}${qtdTexto} (${item.type})${cores.reset}`)
        invIndex++
    }

    console.log("\n            [W] Remover Itens iniciais")
    console.log("          [NUM] Usar/Equipar item")
    console.log("       [ESPAÇO] Voltar")
    
    let validKeys = 'W '
    for (let i = 1; i <= uniqueItems.length; i++) {
        validKeys += i.toString()
    }

    let inventoryOption = rls.keyIn('\nOpcao: ', { limit: validKeys }).toUpperCase()

    if (inventoryOption === 'W') {
        rmInitItem()
        console.log("\nVocê descartou as memórias iniciais...")
        rls.keyInPause('', { limit: ' '})
    } else if (inventoryOption === ' ') {
        return
    } else {
        let selectedNum = parseInt(inventoryOption) - 1
        let selectedItem = uniqueItems[selectedNum]
        useItem(selectedItem.nome)
    }
}

function useItem(nomeItem) {
    let realIndex = inventory.findIndex(i => i && i.nome === nomeItem)
    if (realIndex === -1) return
    
    let item = inventory[realIndex]

    if (item.type === 'init') {
        console.log(`\nIsso é só uma memória... Não pode ser usado.`)
        rls.keyInPause('', { limit: ' '})
        return
    }

    console.clear()
    console.log(`\nVocê usou: ${item.nome}!`)
    
    if (item.type === 'atk') { // O dano não ta entrando, revisa isso depois eu do futuro
        player.tempAtkBonus += 2
        player.bonusRounds = 2
        console.log(`${cores.red}Sua raiva aumenta. Você ganhou +2 de ATK por 2 turnos!${cores.reset}`)
    } 
    else if (item.type === 'misc') {
        let cura = Math.floor(Math.random() * 7) + 4 
        player.hp += cura
        if (player.hp > player.maxhp) player.hp = player.maxhp
        console.log(`${cores.green}O alívio te acalma. Você recuperou ${cura} pontos de Vida!${cores.reset}`)
    }

    rmItem(realIndex)
    rls.keyInPause('\nPressione [ESPAÇO] para continuar...', { limit: ' '})
}

// Descansar

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

// Conquistas

function achievements() {
    console.clear()
    console.log("Visualizando missões e conquistas...")

    console.log(`       === CONQUISTAS === `)

    showAchievements()

    console.log("[ESPAÇO] Voltar")
    rls.keyIn('', { limit: ' ' })
}

function showAchievements() {
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
}

// Combate

function fight(i) {
    i -= 8
    enemy = {...enemies[i]}

    while(enemy.hp > 0 && player.hp > 0) {
        console.clear()
        console.log(`
            === LUTA ===
            
            [1] - BATER
            [2] - INVENTÁRIO
            [3] - FUGIR
        `)

        console.log(`
        === STATUS DO INIMIGO === 
         Inimigo: ${enemy.nome}                
            Vida: ${enemy.hp}                       
          Ataque: ${enemy.atk}
          Defesa: ${enemy.def}                     
        
        === STATUS DO JOGADOR ===
            Nome: ${player.nome}
            Vida: ${player.hp}
          Ataque: ${player.atk}
          Defesa: ${player.def}
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
                if (run(enemy)) return
            break
        }
    }
}

/*
O jogador usa itens e se prepara >
O jogador ataca >
O sistema verifica se o ataque é válido e a vida do inimigo >
SE a vida for <= 0, ele elimina o inimigo, se for maior, o inimigo (sistema) ataca >
O sistema verifica se o ataque foi válido e a vida do jogador >
SE a vida for menor ou igual a 0, ele chama o fim do jogo (gameOver(id)), se for maior,
Ele retorna pra tela de seleção (primeira parte desse texto)
*/

function hit(enemy) {
    let playerDamage = Math.max(0, (player.atk + player.tempAtkBonus) - enemy.def)
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
        console.log('\nPressione [ESPAÇO] para encerrar o jogo.')
        gameOver(0)
    } else {
        console.log('\nPressione [ESPAÇO] para terminar o turno.')
    }

    
    rls.keyIn('', { limit: ' ' })

    if (player.bonusRounds > 0) {
        player.bonusRounds--
        if (player.bonusRounds === 0) {
            player.tempAtkBonus = 0
            console.log(`\n${cores.gray}[SISTEMA] O efeito do bônus de ataque passou.${cores.reset}`)
        }
    }
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

    console.log(`
        === CONQUISTAS ALCANÇADAS ===
    `)
    achieve()
    showAchievements()
    process.exit(0)// Comando do Node para finalizar o jogo (não tava funcionando por causa de Call Stack, então fui direto pelo node mesmo)
}

function gameOver(id) {
    console.clear()
    if (id === 0) {
        console.log("Final RUIM - 1")
        gameEnd = true
    } else if (id === 1) {
        console.log("Final RUIM - 2")
        gameEnd = true
        return
    }

    console.log(`
        === CONQUISTAS ALCANÇADAS ===
    `)
    achieve()
    showAchievements()
    process.exit(0) // Comando do Node.js para finalizar o jogo
}

// Missões

function achieve() {
    if (player.enemiesDefType.includes("Sombra")) tasks[0].completed = true
    if (player.enemiesDefType.includes("O Mascarado")) tasks[1].completed = true
    if (player.restTimes >= 5) tasks[2].completed = true
    if (player.hasEscaped > 0) tasks[3].completed = true

    let win = tasks.slice(0, 4).every(t => t.completed)
    if (win && !gameEnd) {
        tasks[4].completed = true
        gameComplete()
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
