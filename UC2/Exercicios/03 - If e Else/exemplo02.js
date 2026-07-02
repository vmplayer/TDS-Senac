const rl = require('readline-sync')

let idade = rl.questionInt("Qual a sua idade? ")
let possuiCNH
let repeatf

if (idade < 18) {
    console.log("Você não tem idade suficiente para dirigir!")
} else {
    possuiCNH = rl.keyInYN("Possui CNH? ")

    while (!repeatf) {
        if (possuiCNH === true || possuiCNH === false) {
            repeatf = true
            if (idade >= 18 && possuiCNH) {
                console.log("Você pode dirigir!")
            } else {
                console.log("Você não pode dirigir!")
            }
        } else {
            repeatf = false
            console.log("Digite um valor Y (sim) ou N (não).")
            possuiCNH = rl.keyInYN("Possui CNH? ")
        }
    }
}
