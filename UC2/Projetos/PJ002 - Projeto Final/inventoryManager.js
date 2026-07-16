const maxItems = 20

inventory = []

let initItem = [
    { nome: "Foto queimada", type: "init", value: 0 },
    { nome: "Ursinho rasgado", type: "init", value: 5 },
    { nome: "Faca de brinquedo", type: "init", value: 12 }
]

let weapons = [
    { nome: "Opressão", type: "atk", atk: 12, itemhp: 100 },
    { nome: "Insulto", type: "atk", atk: 8, itemhp: 50 },
    { nome: "A Verdade", type: "atk", atk: 30, itemhp: 20},
    { nome: "Culpa", type: "atk", atk: 2, itemhp: 1, rounds: 5},
    { nome: "Tempo", type: "atk", atk: 25, itemhp: 3 }
]

let misc = [
    { nome: "Atenção", type: "misc", reg: 6, itemhp: 1, rounds: 2 },
    { nome: "Entorpecente", type: "misc", reg: 18, itemhp: 3 }
]

module.exports = { inventory, initItem, maxItems, weapons, misc }
