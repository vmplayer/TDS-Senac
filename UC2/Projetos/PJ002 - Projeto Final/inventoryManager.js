let maxItems

let inventory = []
let backpackLVL = 1

let initItem = [
    {
        nome: "Foto queimada",
        type: "init",
        value: 0,
        inspect: "Há algo escrito atrás:\n Agora o co**o de uma alma q*e eu adoro quer mo****\nVo** sem*** *e di*se qu* **o ***e*ia a*** *o* **"
    },
    {
        nome: "Ursinho rasgado",
        type: "init",
        value: 5,
        inspect: "Não consigo lembrar de quando ganhei isso... Será que existe algum valor nisso?\nQue perca de tempo..."
    },
    {
        nome: "Faca de brinquedo",
        type: "init",
        value: 12,
        inspect: "Uma faca...\nAcho que é só isso mesmo. Um brinquedo velho que insisti em trazer comigo."
    }
]

let weapons = [
    { nome: "Opressão", type: "atk", atk: 12, itemhp: 100 },
    { nome: "Insulto", type: "atk", atk: 8, itemhp: 50 },
    { nome: "A Verdade", type: "atk", atk: 30, itemhp: 20 },
    { nome: "Culpa", type: "atk", atk: 2, itemhp: 1, rounds: 5 },
    { nome: "Tempo", type: "atk", atk: 25, itemhp: 3 }
]

let misc = [
    { nome: "Atenção", type: "misc", reg: 6, itemhp: 1, rounds: 2 },
    { nome: "Entorpecente", type: "misc", reg: 18, itemhp: 3 }
]

// Funções

function addInitItem() {
    for (let i in initItem) {
        inventory.push(initItem[i])
    }
}

if (backpackLVL === 1) {
    maxItems = 25
} else if (backpackLVL === 2) {
    maxItems = 50
}

module.exports = { inventory, backpackLVL, initItem, maxItems, weapons, misc, addInitItem }
