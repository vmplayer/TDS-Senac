const rls = require('readline-sync')

let end = false
let letter
const words = [
    "Steel Ball Run", 
    "A Silent Voice", 
    "Your Name.", 
    "Bocchi the Rock!"
]

function showMenu() {
    console.clear()
    console.log(`
        === JOGO DA FORCA ===
        
            [1] - JOGAR
            [2] - SAIR
    `)
}

function play() {
    let word = Math.floor(Math.random() * 3)
    let chWord = words[word].split("")

    chWord.forEach(letra => {
        console.log("_")
    })

    end = true
}

function exit() {
    console.log("Encerrando o jogo...")
    process.exit()
}

while (!end) {
    showMenu()

    let option = rls.questionInt("", { limit: 12 })

    switch (option) {
        case 1:
            play()
        break
        
        case 2:
            exit()
        break
    }
}
