const rls = require('readline-sync')
const { inventory } = require('./inventoryManager')

const enemies = [
    { nome: "Goblin", hp: 30, atk: 8, def: 5, drop: "veneno" },
    { nome: "Orc", hp: 50, atk: 12, def: 8, drop: "faca velha" }
]

let activeEnemies = []

const player = {
    nome: "valval",
    classe: "Mago",
    hp: 80,
    maxhp: 80,
    atk: 25,
    def: 13,
    lvl: 0,
    blood: 100
}

function fight() {
    let enemyIndex = Math.floor(Math.random() * enemies.length)

    console.log("Você encontrou um inimigo!")

    activeEnemies = [{...enemies[enemyIndex]}]

    while (activeEnemies[0].hp > 0 && player.hp > 0) {
        console.log(activeEnemies[0])
        console.log(`
           === LUTA ===
            [1] BATER
            [2] ITENS
            [3] FUGIR
        `)

        let opcao = rls.question('Opcao: ')

        switch (opcao) {
            case '1':
                hit()
                break

            case '2':
                items()
                break
            
            case '3':
                if (run()) return
                break
        }
    }
}

function hit(i) {
    let enemy = activeEnemies[0]

    let danoNoInimigo = player.atk - enemy.def
    let danoNoPlayer = enemy.atk - player.def



    if (danoNoInimigo > 0) {
        console.log("Você causou ", danoNoInimigo, " de dano!")
        enemy.hp -= danoNoInimigo
    } else {
        console.log(`Você é um lixo.`)
    }

    if (danoNoPlayer > 0) {
        player.hp -= danoNoPlayer
    } else {
        console.log("O inimigo é um lixo.")
    }

    if (danoNoPlayer === 0 || danoNoInimigo === 0) console.log("Os dois são um lixo pqpkkkkkkkkk")

    if (enemy.hp <= 0) {
        enemy.hp = 0
    } else if (player.hp <= 0) {
        player.hp = 0
    }

    if (player.hp <= 0) {
        console.log("Você morreu.")
    } else if (enemy.hp <= 0) {
        console.log("Você derrotou o ", enemy)
        return
    }
}

function items() {
    for (let i of inventory) {
        console.log(i)
    }
}

function run() {
    if (Math.random() > 0.5) {
        console.log("Você fugiu.")
        return true
    } else {
        console.log("Não conseguiu correr.")
        return false
    }
}

fight()
