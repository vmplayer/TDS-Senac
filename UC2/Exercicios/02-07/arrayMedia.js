const rl = require("readline-sync")

let notas = []
let soma = 0

for (let i = 0; i < 4; i++) {

    let nota = rl.questionFloat(`Nota ${i + 1}: `)

    notas.push(nota)

    soma += nota

}

let media = soma / notas.length

console.log()

console.log("Média:", media.toFixed(2))
