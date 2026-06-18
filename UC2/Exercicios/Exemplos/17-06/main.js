const rl = require('readline-sync')

console.clear()

let idade = rl.questionInt("Quantos anos voce tem? ")

if (idade >= 18) {
    let possuiCNH = rl.keyInYNStrict("Possui CNH? ")

    if (possuiCNH === true) {
        console.log("Você pode dirigir!")
    } else {
        console.log("Você tem idade suficiente, mas não tem CNH, ou seja, você não pode dirigir.")
    }
} else {
    console.log("Você é menor de idade, portanto, não pode dirigir.")
}
