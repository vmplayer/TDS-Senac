const { player, classes } = require('./playerSystem.js')

// Inimigos

let enemies = [
    { name: "Sombra", type: "Sombra", hp: 30, atk: 8, def: 5, drop: "Tempo" },
    { name: "O Mascarado", type: "O Mascarado", hp: 50, atk: 12, def: 8, drop: "Culpa" },
    { name: "O Criador", type: "O Criador", hp: 200, atk: 20, def: 12, drop: "Entorpecente" }
]

let activeEnemies = []

module.exports = { enemies, activeEnemies }
 
