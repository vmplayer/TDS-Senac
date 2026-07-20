const { player, classes } = require('./playerSystem.js')

let enemies = [
    { nome: "Goblin", hp: 30, atk: 8, def: 5, drop: "veneno" },
    { nome: "Orc", hp: 50, atk: 12, def: 8, drop: "faca velha" },
    { nome: "Dragão", hp: 200, atk: 20, def: 12, drop: "end" }
]

let activeEnemies = []

module.exports = { enemies, activeEnemies }
