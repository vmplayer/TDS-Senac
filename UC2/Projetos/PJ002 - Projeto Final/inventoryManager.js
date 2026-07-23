let maxItems = 25 // Itens máximos do inventário

let inventory = []

// Itens iniciais

let initItem = [
    {
        nome: "Foto queimada",
        description: "Há algo escrito atrás:\n Agora o co**o de uma alma q*e eu adoro quer mo****\nVo** sem*** *e di*se qu* **o ***e*ia a*** *o* **",
        type: "init"
    },
    {
        nome: "Ursinho rasgado",
        description: "Não consigo lembrar de quando ganhei isso... Será que existe algum valor nisso?\nQue perca de tempo...",
        type: "init"
    },
    {
        nome: "Faca de brinquedo",
        description: "Uma faca...\nAcho que é só isso mesmo. Um brinquedo velho que insisti em trazer comigo.",
        type: "init"
    }
]

// Armas

let weapons = [
    { 
        nome: "Opressão",
        description: "A opressão... Como sempre, como sempre, ele sempre faz isso, de novo e de novo.",
        type: "atk",
        atk: 2
    },
    { 
        nome: "Insulto", 
        description: "Insulto, aquilo que sempre nos falam, né? Eu realmente ligo pra isso?",
        type: "atk", 
        atk: 2
    },
    { 
        nome: "A Verdade", 
        description: "Dói, né? Insensível, né?", 
        type: "atk", 
        atk: 2
    },
    { 
        nome: "Culpa", 
        description: "A sua arma é a culpa.", 
        type: "atk", 
        atk: 2
    },
    { 
        nome: "Tempo", 
        description: "Tempo, o tempo leva até a flor mais bela, e o que muda? A nova flor vai florescer, e o tempo vai nos deixar com nada além de insetos grunhindo com sua fome e raiva.", 
        type: "atk", 
        atk: 2
    }
]

// Miscelâneas (cura)

let misc = [ 
    { 
        nome: "Atenção", 
        description: "Nunca é demais, né?", 
        type: "misc"
    },
    { 
        nome: "Entorpecente", 
        description: "Pare de se contorcer.", 
        type: "misc" 
    }
]

// Funções

function addInitItem() {
    for (let i of initItem) {
        inventory.unshift(initItem[i])
    }
}

function rmInitItem() {
    for (let i in initItem) {
        inventory.shift()
    }
}

function rmItem(index) {
    if (index >= 0 && index < inventory.length) {
        inventory.splice(index, 1)
        console.log("\n[SISTEMA] Item removido da mochila.")
    }
}

function removeLastItem() {
    inventory.pop()
}

module.exports = { inventory, initItem, maxItems, weapons, misc, addInitItem, rmInitItem, rmItem, removeLastItem }