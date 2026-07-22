let maxItems

let inventory = []
let backpackLVL = 1

let initItem = [
    {
        nome: "Foto queimada",
        description: "Há algo escrito atrás:\n Agora o co**o de uma alma q*e eu adoro quer mo****\nVo** sem*** *e di*se qu* **o ***e*ia a*** *o* **",
        type: "init",
        value: 0
    },
    {
        nome: "Ursinho rasgado",
        description: "Não consigo lembrar de quando ganhei isso... Será que existe algum valor nisso?\nQue perca de tempo...",
        type: "init",
        value: 5
    },
    {
        nome: "Faca de brinquedo",
        description: "Uma faca...\nAcho que é só isso mesmo. Um brinquedo velho que insisti em trazer comigo.",
        type: "init",
        value: 12
    }
]

let weapons = [
    { 
        nome: "Opressão",
        description: "",
        type: "atk",
        atk: 12,
        value: 12
    },
    { 
        nome: "Insulto", 
        description: "",
        type: "atk", 
        atk: 8, 
        value: 15 
    },
    { 
        nome: "A Verdade", 
        description: "", 
        type: "atk", 
        atk: 30, 
        value: 20 
    },
    { 
        nome: "Culpa", 
        description: "", 
        type: "atk", 
        atk: 2, 
        value: 25, 
        rounds: 5 
    },
    { 
        nome: "Tempo", 
        description: "", 
        type: "atk", 
        atk: 25, 
        itemhp: 3 
    }
]

let misc = [
    { 
        nome: "Atenção", 
        description: "", 
        type: "misc", 
        reg: 6, 
        itemhp: 1, 
        rounds: 2 
    },
    { 
        nome: "Entorpecente", 
        description: "", 
        type: "misc", 
        reg: 18, 
        itemhp: 3 
    }
]

// Funções

function addInitItem() {
    for (let i in initItem) {
        inventory.unshift(initItem[i])
    }
}

function rmInitItem() {
    for (let i in initItem) {
        inventory.shift(initItem[i])
    }
}

if (backpackLVL === 1) {
    maxItems = 25
} else if (backpackLVL === 2) {
    maxItems = 50
}

module.exports = { inventory, backpackLVL, initItem, maxItems, weapons, misc, addInitItem, rmInitItem }
