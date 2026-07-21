const rls = require('readline-sync')
const { inventory } = require('./inventoryManager')

let enemies = [
    { nome: "Goblin", hp: 30, atk: 8, def: 5, drop: "Tempo" },
    { nome: "Orc", hp: 50, atk: 12, def: 8, drop: "Culpa" },
    { nome: "Dragão", hp: 200, atk: 20, def: 12, drop: "Entorpecente" }
]

let activeEnemies = []

let player = {
    nome: "valval",
    classe: "Mago",
    hp: 80,
    maxhp: 80,
    atk: 25,
    def: 13,
    lvl: 0,
    blood: 100
}

// O jogador usa itens e se prepara >
// o jogador ataca ataca >
// o sistema verifica se o ataque é válido e a vida do inimigo >
// SE o a vida for <= 0, ele elimina o inimigo, se for maior, o inimigo (sistema) ataca >
// o sistema verifica se o ataque foi válido e a vida do jogador >
// SE a vida for menor ou igual a 0, ele chama o fim do jogo (gameOver(id)), se for maior,
// ele retorna pra tela de seleção (primeira parte desse texto)

function fight() {
    let enemyIndex = Math.floor(Math.random() * enemies.length)
    let enemy = { ...enemies[enemyIndex] }

    let emLuta = true

    while (emLuta) {
        console.clear()
        console.log(`\n=== EM COMBATE ===`)
        console.log(`Inimigo: ${enemy.nome} | Vida: ${enemy.hp} | Def: ${enemy.def}`)
        console.log(`Sua Vida: ${player.hp}/${player.maxhp} | Sua Def: ${player.def}\n`)
        
        console.log(`[1] - ATAQUE`)
        console.log(`[2] - USAR ITEM (Mochila)`)
        console.log(`[3] - FUGIR`)

        let opcao = rls.keyIn('\nEscolha uma ação: ', { limit: '123' })

        // === 1. FASE DE PREPARAÇÃO (USAR ITENS) ===
        if (opcao === '2') {
            openInventory()
            continue
        }

        // === FUGIR ===
        if (opcao === '3') {
            console.log("\nVocê conseguiu correr e se esconder no escuro...")
            rls.keyInPause('Pressione [ESPAÇO] para voltar...')
            emLuta = false
            break
        }

        // === 2. FASE DE ATAQUE DO JOGADOR ===
        if (opcao === '1') {
            let danoNoInimigo = Math.max(0, player.atk - enemy.def)
            enemy.hp -= danoNoInimigo

            console.clear();
            if (danoNoInimigo > 0) {
                console.log(`\nVocê atacou e tirou ${cores.red}${danoNoInimigo}${cores.reset} de vida do ${enemy.nome}!`)
            } else {
                console.log(`\nSeu ataque nem arranhou a defesa do ${enemy.nome}...`)
            }

            // === 3. CHECAGEM DO INIMIGO ===
            if (enemy.hp <= 0) {
                enemy.hp = 0
                console.log(`\nVocê derrotou o ${enemy.nome}!`)
                rls.keyInPause('Pressione [ESPAÇO] para continuar...')
                emLuta = false
                break
            }

            // === 4. CONTRA-ATAQUE DO INIMIGO (Se ele sobreviveu) ===
            let danoNoPlayer = Math.max(0, enemy.atk - player.def)
            player.hp -= danoNoPlayer

            if (danoNoPlayer > 0) {
                console.log(`O ${enemy.nome} te contra-atacou e causou ${cores.red}${danoNoPlayer}${cores.reset} de dano!`)
            } else {
                console.log(`O ${enemy.nome} tentou te bater, mas você bloqueou!`)
            }

            // === 5. CHECAGEM DO JOGADOR ===
            if (player.hp <= 0) {
                player.hp = 0
                console.log(`\n${cores.red}Você não aguenta mais suportar essa dor...${cores.reset}`)
                rls.keyInPause('Pressione [ESPAÇO]...')
                gameOver(0);
                emLuta = false
                break
            }

            rls.keyInPause('\nPressione [ESPAÇO] para o próximo turno...')
        }
    }
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

function gameOver(id) {
    if (id === 0) {
        console.log("Final ruim 1")
    } else {
        console.log("Final ruim 2")
    }
}

fight()

rls.keyInYNStrict('Testar novamente? ')

while (opcaoDoKeyInYN === true) {
    fight()
}
