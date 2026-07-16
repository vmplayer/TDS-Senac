const { player, classes } = require('./player.js')

let enemies = [
    { nome: "Goblin", vida: 30, ataque: 8, drop: "veneno" },
    { nome: "Orc", vida: 50, ataque: 12, drop: "faca velha" },
    { nome: "Dragão", vida: 200, ataque: 20, drop: "end" }
]

module.exports = { enemies }