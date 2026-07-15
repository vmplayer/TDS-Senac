inventory = []

weapons = [
    { nome: "Facão", atk: 12, itemhp: 100 },
    { nome: "Cinto", atk: 8, itemhp: 50 },
    { nome: "Fio Elétrico", atk: 30, itemhp: 20},
    { nome: "Veneno", atk: 2, itemhp: 1, rounds: 5},
    { nome: "Livro", atk: 25, itemhp: 3 }
]

misc = [
    { nome: "Curativo rasgado", reg: 6, itemhp: 1, rounds: 2 },
    { nome: "Remédio", reg: 18, itemhp: 3 }
]

module.exports = { inventory, weapons, misc }
